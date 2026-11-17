import { writeFile } from 'node:fs/promises';
import { capture } from './capture.js';

const url = process.argv[2];
if (!url) {
  console.error('Usage: npm run capture -- <url>');
  process.exit(1);
}

const result = await capture(url);
await writeFile('screenshot.png', result.screenshot);
console.log(JSON.stringify({ url: result.url, title: result.title, description: result.description }, null, 2));
