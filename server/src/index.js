import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

const serverDir = path.dirname(fileURLToPath(import.meta.url));
const envPath = [
  path.resolve(serverDir, '../../.env'),
  path.resolve(process.cwd(), '.env'),
  path.resolve(process.cwd(), '../.env'),
].find((candidate) => fs.existsSync(candidate));
if (envPath) dotenv.config({ path: envPath });

const { default: app } = await import('./app.js');

const port = Number(process.env.PORT) || 4000;
const uploadsDir = path.resolve(process.cwd(), 'uploads');
fs.mkdirSync(uploadsDir, { recursive: true });

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
  const emailJsReady = process.env.EMAILJS_SERVICE_ID && process.env.EMAILJS_TEMPLATE_ID && process.env.EMAILJS_PUBLIC_KEY;
  const smtpReady = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;
  if (!emailJsReady && !smtpReady) {
    console.warn('Contact enquiries will not be emailed until EmailJS or SMTP settings are complete.');
  }
});
