import crypto from 'node:crypto';
import { updateJson } from '../lib/store.js';
import { cleanText, readBoundedText, readEmail, readOneOf, validationError } from '../lib/validate.js';
import { sendEnquiryEmail } from './mailService.js';

const INTENTS = ['led_wall', 'advertise', 'property', 'agency', 'digitize'];

const INTENT_LABELS = {
  led_wall: 'Custom LED wall',
  advertise: 'Advertise',
  property: 'Property location',
  agency: 'Agency enquiry',
  digitize: 'Digitize billboard',
};

const INTENT_FIELDS = {
  led_wall: [
    ['company', 'Company', 160],
    ['projectDescription', 'Project description', 4000],
  ],
  advertise: [
    ['brandName', 'Brand or agency name', 160],
    ['campaignGoals', 'Campaign goals', 4000],
  ],
  property: [['propertyAddress', 'Property address', 300]],
  agency: [['agencyDetails', 'Agency details', 4000]],
  digitize: [['billboardDetails', 'Billboard details', 4000]],
};

const OPTIONAL_FIELDS = [
  ['company', 'Company', 160, true],
  ['projectDescription', 'Project description', 4000, false],
  ['brandName', 'Brand or agency name', 160, true],
  ['campaignGoals', 'Campaign goals', 4000, false],
  ['propertyAddress', 'Property address', 300, true],
  ['agencyDetails', 'Agency details', 4000, false],
  ['billboardDetails', 'Billboard details', 4000, false],
];

function take(errors, key, result) {
  if (result.error) errors[key] = result.error;
  return result.value;
}

function enquiryRows(enquiry) {
  const rows = [
    ['Reference', enquiry.id],
    ['Intent', INTENT_LABELS[enquiry.intent]],
    ['Name', `${enquiry.firstName} ${enquiry.lastName}`],
    ['Email', enquiry.email],
  ];
  const extras = [
    ['Company', enquiry.company],
    ['Project description', enquiry.projectDescription],
    ['Brand', enquiry.brandName],
    ['Campaign goals', enquiry.campaignGoals],
    ['Property address', enquiry.propertyAddress],
    ['Agency details', enquiry.agencyDetails],
    ['Billboard details', enquiry.billboardDetails],
  ];
  extras.forEach(([label, value]) => {
    if (value) rows.push([label, value]);
  });
  if (enquiry.attachments.length > 0) {
    rows.push(['Attachments', enquiry.attachments.map((file) => file.originalName).join(', ')]);
  }
  return rows;
}

export function parseEnquiry(body, files = []) {
  const errors = {};
  const intentResult = readOneOf(body.intent, 'Intent', INTENTS);
  if (!String(body.intent || '').trim()) intentResult.error = 'Choose what you are looking for';
  const intent = take(errors, 'intent', intentResult);
  const firstName = take(errors, 'firstName', readBoundedText(body.firstName, 'First name', 80, { required: true, singleLine: true }));
  const lastName = take(errors, 'lastName', readBoundedText(body.lastName, 'Last name', 80, { required: true, singleLine: true }));
  const email = take(errors, 'email', readEmail(body.email));

  const requiredKeys = new Set((INTENT_FIELDS[intent] || []).map(([key]) => key));
  const details = {};
  OPTIONAL_FIELDS.forEach(([key, label, maxLength, singleLine]) => {
    details[key] = take(
      errors,
      key,
      readBoundedText(body[key], label, maxLength, { required: requiredKeys.has(key), singleLine }),
    );
  });

  if (Object.keys(errors).length > 0) {
    throw validationError('Please correct the highlighted fields', errors);
  }

  const enquiry = {
    id: crypto.randomUUID(),
    intent,
    firstName,
    lastName,
    email,
    company: details.company,
    projectDescription: details.projectDescription,
    brandName: details.brandName,
    campaignGoals: details.campaignGoals,
    propertyAddress: details.propertyAddress,
    agencyDetails: details.agencyDetails,
    billboardDetails: details.billboardDetails,
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
  await sendEnquiryEmail(enquiry, files);

  const stored = { ...enquiry };
  delete stored.rows;
  await updateJson('enquiries.json', async (current) => {
    const list = Array.isArray(current) ? current : [];
    list.push(stored);
    return list;
  });

  return { id: enquiry.id, intent: enquiry.intent, createdAt: enquiry.createdAt };
}
