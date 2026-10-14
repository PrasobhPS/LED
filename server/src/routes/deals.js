import { Router } from 'express';
import { sendData, sendError } from '../http.js';
import { createDeal } from '../services/dealService.js';
import { rateLimit } from '../middleware/rateLimit.js';
import { requireAdmin } from '../middleware/adminAuth.js';
import { readJson } from '../lib/store.js';

const router = Router();
const limitPosts = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, keyPrefix: 'deals' });

router.get('/', requireAdmin, async (_req, res, next) => {
  try {
    const deals = await readJson('deals.json', []);
    sendData(res, deals, { total: deals.length });
  } catch (error) {
    next(error);
  }
});

router.post('/', limitPosts, async (req, res, next) => {
  try {
    const deal = await createDeal(req.body || {});
    sendData(res, deal, {}, 201);
  } catch (error) {
    if (error.status) {
      sendError(res, error.status, error.message, error.code);
      return;
    }
    next(error);
  }
});

export default router;
