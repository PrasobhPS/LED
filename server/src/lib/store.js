import fs from 'node:fs/promises';
import path from 'node:path';

const dataDir = path.resolve(process.cwd(), 'data');
let writeQueue = Promise.resolve();

export async function readJson(filename, fallback) {
  try {
    const raw = await fs.readFile(path.join(dataDir, filename), 'utf8');
    return JSON.parse(raw);
  } catch (error) {
    if (error.code === 'ENOENT') return fallback;
    throw error;
  }
}

export function updateJson(filename, updater) {
  writeQueue = writeQueue.then(async () => {
    const current = await readJson(filename, []);
    const next = await updater(current);
    await fs.mkdir(dataDir, { recursive: true });
    await fs.writeFile(path.join(dataDir, filename), JSON.stringify(next, null, 2));
    return next;
  });
  return writeQueue;
}
