import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware is running...");
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/company/:path*"],
};
