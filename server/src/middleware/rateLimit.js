const buckets = new Map();

export function rateLimit({ windowMs, max, keyPrefix }) {
  return (req, res, next) => {
    const now = Date.now();
    const key = `${keyPrefix}:${req.ip}`;
    const bucket = buckets.get(key) || [];
    const recent = bucket.filter((timestamp) => now - timestamp < windowMs);
    if (recent.length >= max) {
      res.status(429).json({
        data: null,
        error: { message: 'Too many requests. Please try again shortly.', code: 'rate_limited' },
        meta: {},
      });
      return;
    }
    recent.push(now);
    buckets.set(key, recent);
    next();
  };
}
