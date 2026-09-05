const SOURCE = 'https://sean-hawks.github.io/hackathon2026/openai-countdown.html';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (!['GET', 'HEAD'].includes(request.method)) {
      return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
    }
    if (!['/', '/openai-countdown.html'].includes(url.pathname)) {
      return new Response('Not found', { status: 404 });
    }
    // Query parameters remain in the visitor URL for the countdown script.
    // Fetch only this public page; never forward visitor cookies or credentials.
    try {
      const upstream = await fetch(SOURCE, { cf: { cacheTtl: 60, cacheEverything: true } });
      if (!upstream.ok) return new Response('Page temporarily unavailable', { status: 502 });
      return new Response(request.method === 'HEAD' ? null : upstream.body, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=60',
          'X-Content-Type-Options': 'nosniff',
        },
      });
    } catch {
      return new Response('Page temporarily unavailable', { status: 502 });
    }
  },
};
