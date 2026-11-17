# page-capture

Capture a full-page screenshot plus title and meta description for any URL,
using Playwright.

## Local

```bash
npm install
npm run capture -- https://news.ycombinator.com
```

## API

`GET /api/capture?url=https://example.com` returns JSON with the title,
description and a base64 screenshot. Deployed as a Vercel serverless function
(see `vercel.json`).

## Known issue

Works locally. On the Vercel deployment, `/api/capture` returns a 500:

```
browserType.launch: Executable doesn't exist at /home/sbx_user1051/.cache/ms-playwright/chromium_headless_shell-1200/chrome-linux/headless_shell
```
