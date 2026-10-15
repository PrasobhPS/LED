import crypto from 'node:crypto';
import { updateJson } from '../lib/store.js';
import { cleanText, readBoundedText, readEmail, readOneOf, readOptionalNumber, readPhone, validationError } from '../lib/validate.js';
import { sendEnquiryEmail } from './mailService.js';

const DISPLAY_TYPES = [
  'Indoor LED',
  'Outdoor LED',
  'Billboard',
  'Building Facade',
  'Retail',
  'Other',
];

function take(errors, key, result) {
  if (result.error) errors[key] = result.error;
  return result.value;
}

function enquiryRows(enquiry) {
  const rows = [
    ['Reference', enquiry.id],
    ['Name', `${enquiry.firstName} ${enquiry.lastName}`],
    ['Company', enquiry.company],
    ['Phone', enquiry.phone],
    ['Email', enquiry.email],
    ['Display type', enquiry.needType],
    ['Project location', enquiry.location],
    ['Requirement', enquiry.projectDescription],
  ];
  if (enquiry.width) rows.push(['Approx. width', enquiry.width]);
  if (enquiry.height) rows.push(['Approx. height', enquiry.height]);
  if (enquiry.attachments.length > 0) {
    rows.push(['Location photos', enquiry.attachments.map((file) => file.originalName).join(', ')]);
  }
  return rows;
}

export function parseEnquiry(body, files = []) {
  const errors = {};
  const intent = take(errors, 'intent', readOneOf(body.intent, 'Intent', ['led_wall']));
  const firstName = take(errors, 'firstName', readBoundedText(body.firstName, 'First name', 80, { required: true, singleLine: true }));
  const lastName = take(errors, 'lastName', readBoundedText(body.lastName, 'Last name', 80, { required: true, singleLine: true }));
  const company = take(errors, 'company', readBoundedText(body.company, 'Company', 160, { required: true, singleLine: true }));
  const phone = take(errors, 'phone', readPhone(body.phone));
  const email = take(errors, 'email', readEmail(body.email));
  const needType = take(errors, 'needType', readOneOf(body.needType, 'Display type', DISPLAY_TYPES));
  const location = take(errors, 'location', readBoundedText(body.location, 'Project location', 200, { required: true, singleLine: true }));
  const width = take(errors, 'width', readOptionalNumber(body.width, 'Approx. width'));
  const height = take(errors, 'height', readOptionalNumber(body.height, 'Approx. height'));
  const projectDescription = take(errors, 'projectDescription', readBoundedText(body.projectDescription, 'Requirement', 4000, { required: true }));

  if (Object.keys(errors).length > 0) {
    throw validationError('Please correct the highlighted fields', errors);
  }

  const enquiry = {
    id: crypto.randomUUID(),
    intent,
    firstName,
    lastName,
    company,
    phone,
    email,
    needType,
    location,
    width,
    height,
    projectDescription,
    attachments: files.map((file) => ({
      storedName: file.filename,
      originalName: cleanText(file.originalname, 180),
      size: file.size,
      mimeType: file.mimetype,
    })),
    createdAt: new Date().toISOString(),
  };
  enquiry.rows = enquiryRows(enquiry);
  return enquiry;
}

export async function createEnquiry(body, files = []) {
  const enquiry = parseEnquiry(body, files);
  const stored = { ...enquiry };
  delete stored.rows;
  await updateJson('enquiries.json', async (current) => {
    const list = Array.isArray(current) ? current : [];
    list.push(stored);
    return list;
  });

  const emailJsReady = process.env.EMAILJS_PUBLIC_KEY?.trim()
    && process.env.EMAILJS_SERVICE_ID?.trim()
    && process.env.EMAILJS_TEMPLATE_ID?.trim();
  if (!emailJsReady) {
    try {
      await sendEnquiryEmail(enquiry, files);
    } catch (error) {
      if (error.code !== 'mail_not_configured') throw error;
      console.warn(`Enquiry ${enquiry.id} was saved. Email was not sent because mail is not configured.`);
    }
  }

  return { id: enquiry.id, intent: enquiry.intent, createdAt: enquiry.createdAt };
}
