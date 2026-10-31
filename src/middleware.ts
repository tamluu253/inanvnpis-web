import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  // 1. Enforce canonical www domain (inanvnpis.com -> www.inanvnpis.com)
  if (host === 'inanvnpis.com') {
    const targetUrl = new URL(request.url);
    targetUrl.hostname = 'www.inanvnpis.com';
    targetUrl.protocol = 'https:';
    targetUrl.port = '';
    return NextResponse.redirect(targetUrl, 301);
  }

  // 2. Prevent trailing slashes for non-root paths to prevent duplicate content
  if (pathname.length > 1 && pathname.endsWith('/')) {
    const cleanUrl = new URL(request.url);
    cleanUrl.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(cleanUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - public assets directly in root: favicon.ico, icon.png, apple-icon.png
     */
    '/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png).*)',
  ],
};
