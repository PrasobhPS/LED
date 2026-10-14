const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g;

export function cleanText(value, maxLength) {
  if (typeof value !== 'string') return '';
  return value.replace(CONTROL_CHARS, '').trim().slice(0, maxLength);
}

export function validationError(message, fields) {
  const error = new Error(message);
  error.status = 422;
  error.code = 'validation_error';
  if (fields) error.fields = fields;
  return error;
}

function requiredMessage(field) {
  const plural = field.includes(' ') && field.endsWith('s');
  return `${field} ${plural ? 'are' : 'is'} required`;
}

export function readBoundedText(value, field, maxLength, { required = false, singleLine = false } = {}) {
  let text = typeof value === 'string' ? value.replace(CONTROL_CHARS, '').trim() : '';
  if (singleLine) text = text.replace(/[\r\n]+/g, ' ').replace(/[ \t]{2,}/g, ' ').trim();
  if (!text) {
    return required ? { value: '', error: requiredMessage(field) } : { value: '', error: '' };
  }
  if (text.length > maxLength) {
    return { value: '', error: `${field} must be ${maxLength} characters or fewer` };
  }
  return { value: text, error: '' };
}

export function readEmail(value) {
  const text = readBoundedText(value, 'Email', 180, { required: true, singleLine: true });
  if (text.error) return text;
  const email = text.value.toLowerCase();
  if (!EMAIL_PATTERN.test(email)) {
    return { value: '', error: 'Enter a valid email address' };
  }
  return { value: email, error: '' };
}

export function readPhone(value) {
  const text = readBoundedText(value, 'Phone', 30, { required: true, singleLine: true });
  if (text.error) return text;
  const digits = text.value.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) {
    return { value: '', error: 'Enter a valid phone number' };
  }
  return text;
}

export function readOneOf(value, field, allowed) {
  const text = readBoundedText(value, field, 80, { required: true });
  if (text.error) return text;
  if (!allowed.includes(text.value)) {
    return { value: '', error: `${field} is not recognized` };
  }
  return text;
}

export function requireText(value, field, maxLength) {
  const text = cleanText(value, maxLength);
  if (!text) {
    const error = new Error(`${field} is required`);
    error.status = 422;
    error.code = 'validation_error';
    throw error;
  }
  return text;
}

export function requireEmail(value) {
  const email = requireText(value, 'Email', 180).toLowerCase();
  if (!EMAIL_PATTERN.test(email)) {
    const error = new Error('Enter a valid email address');
    error.status = 422;
    error.code = 'validation_error';
    throw error;
  }
  return email;
}

export function requireOneOf(value, field, allowed) {
  const text = requireText(value, field, 80);
  if (!allowed.includes(text)) {
    const error = new Error(`${field} is not recognized`);
    error.status = 422;
    error.code = 'validation_error';
    throw error;
  }
  return text;
}
