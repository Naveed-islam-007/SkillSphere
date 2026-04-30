import { getSessionCookie } from "better-auth/cookies";
import { NextResponse } from "next/server";

export function proxy(request) {
  const session = getSessionCookie(request);

  if (!session) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: ["/My-profile",  "/courses/:path*"],
};