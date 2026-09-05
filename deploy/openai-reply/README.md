# openai-reply.observe.tw

Cloudflare Worker `openai-reply` serves the GitHub Pages `openai-countdown.html`
at `https://openai-reply.observe.tw/`. The browser URL stays on the custom domain.
Only `/` and `/openai-countdown.html` are served. Query parameters are preserved
in the browser for the original countdown script. Upstream HTML is cached for
60 seconds; GitHub Pages publication can take additional time.

Update the page by editing `openai-countdown.html` and pushing to `main`.
The other GitHub Pages pages are unaffected. No repository CNAME is needed.

## Analytics

- Google Analytics account: Sky Hong (`178746594`)
- GA4 property: `openai-reply.observe.tw`, Taiwan time, TWD
- Web stream: OpenAI Reply (`15722831638`)
- Measurement ID: `G-0ZBR4086D9`
- GTM account: observe.tw (`6375195221`)
- Web container: `GTM-KTXRCG52` (`263234380`)
- Tag: `GA4 - OpenAI Reply`, Google Tag, Initialization - All Pages

The page contains only the GTM installation snippets; GA4 is loaded by the
published container. Do not add a second direct gtag config, which would double
count page views. Standard GA4 enhanced measurement is enabled.

## Worker changes

Deploy `worker.mjs` using the Cloudflare dashboard editor, or run
`npx wrangler deploy` from this directory with an authorized Cloudflare login.
`wrangler.jsonc` records the deployed account, Worker, and custom domain.
No credentials belong in this repository.
