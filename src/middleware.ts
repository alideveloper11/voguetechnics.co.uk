import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 0. Jaguar model URL normalization
  // Keep only the preferred model groupings as canonical destinations.
  if (
    pathname === '/jaguar-f-type-v6-engines' ||
    pathname === '/jaguar-f-type-v8-engines' ||
    pathname === '/jaguar-f-type-svr-r-engines'
  ) {
    return NextResponse.redirect(new URL('/jaguar-f-type-coupe-engines', request.url), 308);
  }

  if (
    pathname === '/jaguar-xj-x300-x308-engines' ||
    pathname === '/jaguar-xj-x350-x358-engines' ||
    pathname === '/jaguar-xj-x351-engines'
  ) {
    return NextResponse.redirect(new URL('/jaguar-xj-engines', request.url), 308);
  }

  // 1. Blog Tag/Category/Author/Page Pattern Cleanup
  // Redirects low-value legacy WordPress taxonomy pages to the main blog
  if (
    pathname.startsWith('/blog/tag') || 
    pathname.startsWith('/blog/category') || 
    pathname.startsWith('/blog/author') || 
    pathname.startsWith('/blog/page')
  ) {
    return NextResponse.redirect(new URL('/blog', request.url), 308); // Permanent Redirect
  }

  // 2. Botched/Junk URLs cleanup
  // Handles cases where social links or scripts were accidentally indexed as path segments
  const junkPatterns = ['tel:', 'mailto:', 'javaScript:', 'http:', 'https:'];
  if (junkPatterns.some(pattern => pathname.includes(pattern))) {
    return NextResponse.redirect(new URL('/', request.url), 308);
  }

  // 3. Engine size normalization (e.g., 3.0-engines -> 3-0-engines)
  // Maintains SEO parity for engine size specific landing pages
  if (pathname.includes('.0')) {
    const newPath = pathname.replace('.0', '-0');
    return NextResponse.redirect(new URL(newPath, request.url), 308);
  }

  return NextResponse.next();
}

// Optimization: Only run on paths that are likely to be legacy or botched
export const config = {
  matcher: [
    '/blog/:path*',
    '/about-us/:path*',
    '/engines/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
