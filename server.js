/**
 * Minimal zero-dependency static server for the Next.js static export in ./out.
 * Used by Railway (and `npm start`) because `next start` cannot serve `output: 'export'`.
 *
 * No COOP/COEP headers are set on purpose: they would block Google AdSense.
 */
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, 'out');
const PORT = Number.parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || '0.0.0.0';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.wasm': 'application/wasm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function resolveFile(urlPath) {
  let decoded;
  try {
    decoded = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  } catch {
    return null;
  }

  let relative = decoded.replace(/\\/g, '/');
  if (relative !== '/' && relative.endsWith('/')) relative = relative.slice(0, -1);
  const base = relative === '/' ? 'index.html' : relative.replace(/^\/+/, '');

  const candidates = [base];
  if (!path.extname(base)) {
    // /about -> about.html, /en/about -> en/about.html, /en -> en.html
    candidates.push(`${base}.html`, path.posix.join(base, 'index.html'));
  }

  for (const candidate of candidates) {
    const absolute = path.resolve(ROOT, candidate);
    if (absolute !== ROOT && !absolute.startsWith(ROOT + path.sep)) continue;
    if (fs.existsSync(absolute) && fs.statSync(absolute).isFile()) return absolute;
  }
  return null;
}

function serve(req, res) {
  const file = resolveFile(req.url || '/');

  if (!file) {
    const notFound = path.join(ROOT, '404.html');
    res.writeHead(404, {
      'Content-Type': fs.existsSync(notFound) ? MIME['.html'] : 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    });
    if (fs.existsSync(notFound)) {
      fs.createReadStream(notFound).pipe(res);
    } else {
      res.end('Not found');
    }
    return;
  }

  res.writeHead(200, {
    'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': 'public, max-age=0, must-revalidate',
    'X-Content-Type-Options': 'nosniff',
  });

  if (req.method === 'HEAD') {
    res.end();
    return;
  }
  fs.createReadStream(file).pipe(res);
}

http.createServer(serve).listen(PORT, HOST, () => {
  console.log(`Serving out/ on http://${HOST}:${PORT}`);
});
