import type { VercelRequest, VercelResponse } from '@vercel/node';
import { capture } from '../src/capture.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const url = typeof req.query.url === 'string' ? req.query.url : undefined;
  if (!url) {
    res.status(400).json({ error: 'Missing ?url=' });
    return;
  }
  const result = await capture(url);
  res.status(200).json({
    url: result.url,
    title: result.title,
    description: result.description,
    screenshot: `data:image/png;base64,${result.screenshot.toString('base64')}`,
  });
}
