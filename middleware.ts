import { NextRequest, NextResponse } from 'next/server';

const PRESENTATION_EXPIRES_AT = new Date('2026-11-08T00:00:00+01:00');

export function middleware(request: NextRequest) {
  if (Date.now() >= PRESENTATION_EXPIRES_AT.getTime()) {
    return new NextResponse(
      `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow,noarchive,nosnippet"><title>Présentation expirée</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f5f7fb;color:#10294d;font:18px/1.5 Arial,sans-serif}.card{max-width:620px;margin:24px;padding:42px;border-radius:24px;background:white;box-shadow:0 18px 55px #10294d18}h1{margin:0 0 12px;font-size:34px}p{margin:0}</style></head><body><main class="card"><h1>Cette présentation a expiré.</h1><p>Contactez VELOK.ai pour obtenir une version à jour.</p></main></body></html>`,
      {
        status: 410,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'private, no-store, max-age=0',
          'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet',
        },
      },
    );
  }

  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'private, no-store, max-age=0');
  response.headers.set(
    'X-Robots-Tag',
    'noindex, nofollow, noarchive, nosnippet',
  );
  return response;
}

export const config = {
  matcher: ['/3-etage', '/3-etage/:path*'],
};
