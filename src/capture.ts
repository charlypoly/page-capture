import { chromium } from 'playwright';

export interface CaptureResult {
  url: string;
  title: string;
  description: string | null;
  screenshot: Buffer;
}

export async function capture(url: string): Promise<CaptureResult> {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30_000 });
    const title = await page.title();
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute('content')
      .catch(() => null);
    const screenshot = await page.screenshot({ fullPage: true });
    return { url, title, description, screenshot };
  } finally {
    await browser.close();
  }
}
