export function sendData(res, data, meta = {}, status = 200) {
  res.status(status).json({ data, error: null, meta });
}

export function sendError(res, status, message, code, fields) {
  res.status(status).json({
    data: null,
    error: { message, code, ...(fields ? { fields } : {}) },
    meta: {},
  });
}

export function httpError(status, message, code) {
  const error = new Error(message);
  error.status = status;
  error.code = code;
  return error;
}
