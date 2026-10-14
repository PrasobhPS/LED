import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import { sendData, sendError } from '../http.js';
import { createEnquiry } from '../services/enquiryService.js';
import { rateLimit } from '../middleware/rateLimit.js';
import { requireAdmin } from '../middleware/adminAuth.js';
import { readJson } from '../lib/store.js';

const uploadsDir = path.resolve(process.cwd(), 'uploads');
const allowedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.pdf', '.mp4']);

const upload = multer({
  storage: multer.diskStorage({
    destination: uploadsDir,
    filename: (_req, file, callback) => {
      const extension = path.extname(file.originalname).toLowerCase();
      callback(null, `${crypto.randomUUID()}${extension}`);
    },
  }),
  limits: { fileSize: 8 * 1024 * 1024, files: 5 },
  fileFilter: (_req, file, callback) => {
    const extension = path.extname(file.originalname).toLowerCase();
    if (!allowedExtensions.has(extension)) {
      callback(new Error('Unsupported file type'));
      return;
    }
    callback(null, true);
  },
});

const router = Router();
const limitPosts = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, keyPrefix: 'enquiries' });

router.get('/', requireAdmin, async (_req, res, next) => {
  try {
    const enquiries = await readJson('enquiries.json', []);
    sendData(res, enquiries, { total: enquiries.length });
  } catch (error) {
    next(error);
  }
});

async function removeUploads(files = []) {
  await Promise.all(files.map((file) => fs.unlink(file.path).catch(() => {})));
}

router.post('/', limitPosts, upload.array('attachments', 5), async (req, res, next) => {
  try {
    const enquiry = await createEnquiry(req.body, req.files || []);
    sendData(res, enquiry, {}, 201);
  } catch (error) {
    await removeUploads(req.files);
    if (error.status) {
      sendError(res, error.status, error.message, error.code, error.fields);
      return;
    }
    next(error);
  }
});

export default router;
