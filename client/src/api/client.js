async function readPayload(response) {
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const message = payload?.error?.message || 'Request failed';
    const error = new Error(message);
    error.status = response.status;
    error.code = payload?.error?.code;
    error.fields = payload?.error?.fields || null;
    throw error;
  }
  return payload?.data;
}

function emailJsConfig() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!serviceId || !templateId || !publicKey) return null;
  return { serviceId, templateId, publicKey };
}

export async function sendEnquiryEmail(fields, fileNames = []) {
  const config = emailJsConfig();
  if (!config) {
    throw new Error('We could not send your enquiry right now. Please try again shortly.');
  }

  const name = `${fields.firstName} ${fields.lastName}`.trim();
  const rows = [
    ['Name', name],
    ['Company', fields.company],
    ['Phone', fields.phone],
    ['Email', fields.email],
    ['Display type', fields.needType],
    ['Project location', fields.location],
    ['Requirement', fields.projectDescription],
  ];
  if (fields.width) rows.push(['Approx. width', fields.width]);
  if (fields.height) rows.push(['Approx. height', fields.height]);
  if (fileNames.length > 0) rows.push(['Location photos', fileNames.join(', ')]);

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      template_params: {
        to_email: 'prasobh011@gmail.com',
        from_name: name,
        from_email: fields.email,
        reply_to: fields.email,
        subject: `New LED enquiry from ${name}`,
        message: rows.map(([label, value]) => `${label}: ${value}`).join('\n'),
        company: fields.company,
        phone: fields.phone,
        need_type: fields.needType,
        location: fields.location,
      },
    }),
  });

  if (!response.ok) {
    throw new Error('We could not send your enquiry right now. Please try again shortly.');
  }
}

export function createEnquiry(formData) {
  return fetch('/api/enquiries', {
    method: 'POST',
    body: formData,
  }).then(readPayload);
}

export function createDeal(deal) {
  return fetch('/api/deals', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(deal),
  }).then(readPayload);
}
