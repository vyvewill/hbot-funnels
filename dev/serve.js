#!/usr/bin/env node
// Local preview server for the funnel pages.
//
// Each file in pages/ is a self-contained block meant to be pasted into a
// GoHighLevel "Custom HTML" element, so it has no <html>, <head>, viewport
// meta or <body>. GHL supplies those. This server wraps each page in the
// same skeleton (viewport meta + #fbfbfe page background, per
// docs/build-and-wiring.md) so the pages render the way they will in GHL,
// including on mobile.
//
//   node dev/serve.js            -> http://localhost:8080/
//   PORT=3000 node dev/serve.js
//
// Add ?raw=1 to any page URL to serve the file without the wrapper.

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT) || 8080;
const PAGES = path.join(__dirname, '..', 'pages');

const wrap = (name, body) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${name}</title>
<style>html,body{margin:0;padding:0;background:#fbfbfe}</style>
</head>
<body>
${body}
</body>
</html>`;

const index = (files) => wrap('HBOT funnel preview', `
<div style="font:16px/1.6 system-ui,sans-serif;max-width:720px;margin:48px auto;padding:0 20px;color:#191735">
<h1 style="font-size:22px">HBOT Recovery Kickstart - page preview</h1>
<p>Pages are wrapped with a viewport meta tag and the GHL page background. Append <code>?raw=1</code> for the bare file.</p>
<ol>${files.map(f => `<li><a href="/${f}">${f}</a></li>`).join('')}</ol>
</div>`);

http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const file = decodeURIComponent(url.pathname.replace(/^\/+/, ''));
  if (file === '' || file === 'index.html') {
    const files = fs.readdirSync(PAGES).filter(f => f.endsWith('.html')).sort();
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    return res.end(index(files));
  }
  const full = path.join(PAGES, path.basename(file));
  if (!file.endsWith('.html') || !fs.existsSync(full)) {
    res.writeHead(404, { 'content-type': 'text/plain' });
    return res.end('not found');
  }
  const body = fs.readFileSync(full, 'utf8');
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
  res.end(url.searchParams.has('raw') ? body : wrap(file, body));
}).listen(PORT, () => console.log(`preview: http://localhost:${PORT}/`));
