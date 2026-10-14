import nodemailer from 'nodemailer';
import { httpError } from '../http.js';

const DEFAULT_INBOX = 'prasobh011@gmail.com';

let cachedTransport;

function headerValue(value) {
  return String(value).replace(/[\r\n]+/g, ' ').trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function mailSettings() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === 'true'
    : port === 465;

  return {
    host,
    port,
    secure,
    user,
    pass,
    from: headerValue(process.env.SMTP_FROM || user),
    to: headerValue(process.env.ENQUIRY_TO || DEFAULT_INBOX),
  };
}

function transportFor(settings) {
  if (!cachedTransport) {
    cachedTransport = nodemailer.createTransport({
      host: settings.host,
      port: settings.port,
      secure: settings.secure,
      auth: { user: settings.user, pass: settings.pass },
    });
  }
  return cachedTransport;
}

function plainBody(rows) {
  return rows.map(([label, value]) => `${label}: ${value}`).join('\n');
}

function htmlBody(rows) {
  const items = rows.map(([label, value]) => (
    `<p><strong>${escapeHtml(label)}</strong><br>${escapeHtml(value).replace(/\n/g, '<br>')}</p>`
  ));
  return `<div>${items.join('')}</div>`;
}

export async function sendEnquiryEmail(enquiry, files = []) {
  const settings = mailSettings();
  if (!settings) {
    console.error('Enquiry email is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.');
    throw httpError(503, 'We could not send your enquiry right now. Please try again shortly.', 'mail_not_configured');
  }

  const replyTo = headerValue(enquiry.email);
  const subject = headerValue(`New LED enquiry from ${enquiry.firstName} ${enquiry.lastName}`);

  try {
    await transportFor(settings).sendMail({
      from: settings.from,
      to: settings.to,
      replyTo,
      subject,
      text: plainBody(enquiry.rows),
      html: htmlBody(enquiry.rows),
      attachments: files.map((file) => ({
        filename: headerValue(file.originalname || 'attachment').slice(0, 180) || 'attachment',
        path: file.path,
        contentType: file.mimetype,
      })),
    });
  } catch (error) {
    console.error(`Enquiry email failed for ${enquiry.id}: ${error.message}`);
    throw httpError(502, 'We could not send your enquiry right now. Please try again shortly.', 'mail_failed');
  }
}
