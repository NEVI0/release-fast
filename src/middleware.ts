import { NextRequest, NextResponse } from 'next/server';

import { auth } from '@configs/auth';
import { getAppUrl } from '@app/helpers';

export async function middleware(request: NextRequest) {
  const session = await auth();
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/access') && session) {
    return NextResponse.redirect(new URL(getAppUrl('/dash')));
  }

  if (pathname.startsWith('/dash') && !session) {
    return NextResponse.redirect(new URL(getAppUrl('/')));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'], // Exclude API routes and static files
};
