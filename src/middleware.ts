import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const protectedRoutes = ['/admin', '/'];  
const authRoutes = ['/login'];

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameWithoutLocale = pathname.replace(/^\/(en|ar)/, '') || '/';
  const locale = pathname.match(/^\/(en|ar)/)?.[1] || 'en';

  const accessToken = request.cookies.get('accessToken')?.value;
  const userType = request.cookies.get('userType')?.value;

  const isProtected = protectedRoutes.some((route) =>
    pathnameWithoutLocale === route || pathnameWithoutLocale.startsWith(route + '/')
  );
  const isAuthRoute = authRoutes.some((route) =>
    pathnameWithoutLocale.startsWith(route)
  );

  if (!accessToken && !isAuthRoute) {
    return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  }

  if (isAuthRoute && accessToken) {
    const redirectTo = userType === 'SUPER_ADMIN'
      ? `/${locale}/admin`
      : `/${locale}`;
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  if (pathnameWithoutLocale === '/' && accessToken && userType === 'SUPER_ADMIN') {
    return NextResponse.redirect(new URL(`/${locale}/admin`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};