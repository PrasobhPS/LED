import path from 'node:path';
import fs from 'node:fs';
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import enquiryRoutes from './routes/enquiries.js';
import dealRoutes from './routes/deals.js';
import { cityRouter, projectRouter, screenRouter } from './routes/catalog.js';
import { sendData, sendError } from './http.js';

const app = express();
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: clientOrigin }));
app.use(express.json({ limit: '200kb' }));

app.get('/api/health', (_req, res) => {
  sendData(res, { status: 'ok' });
});

app.use('/api/enquiries', enquiryRoutes);
app.use('/api/deals', dealRoutes);
app.use('/api/screens', screenRouter);
app.use('/api/projects', projectRouter);
app.use('/api/cities', cityRouter);

const clientDist = path.resolve(process.cwd(), '../client/dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.use((req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') return next();
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

app.use((error, _req, res, _next) => {
  if (error instanceof multer.MulterError || error.message === 'Unsupported file type') {
    sendError(res, 400, 'Upload was rejected. Use images, PDF, or MP4 under 8 MB.', 'upload_error');
    return;
  }
  console.error(error.message);
  sendError(res, 500, 'Unexpected server error', 'server_error');
});

export default app;
