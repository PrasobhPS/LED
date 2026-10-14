import { sendError } from '../http.js';

export function requireAdmin(req, res, next) {
  const configuredToken = process.env.ADMIN_TOKEN;
  const providedToken = req.get('x-admin-token');
  if (!configuredToken || providedToken !== configuredToken) {
    sendError(res, 401, 'Admin token required', 'unauthorized');
    return;
  }
  next();
}
