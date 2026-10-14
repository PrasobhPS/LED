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
