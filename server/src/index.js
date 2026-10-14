import path from 'node:path';
import fs from 'node:fs';
import dotenv from 'dotenv';

const envPath = path.resolve(process.cwd(), '../.env');
if (fs.existsSync(envPath)) dotenv.config({ path: envPath });

const { default: app } = await import('./app.js');

const port = Number(process.env.PORT) || 4000;
const uploadsDir = path.resolve(process.cwd(), 'uploads');
fs.mkdirSync(uploadsDir, { recursive: true });

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('Contact enquiries will not be emailed until SMTP_HOST, SMTP_USER, and SMTP_PASS are set.');
  }
});
