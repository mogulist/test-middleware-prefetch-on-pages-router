import { NextResponse } from "next/server";

export async function middleware(req) {
  const { locale, pathname } = req.nextUrl;
  console.log("middleware: ", pathname);

  const requestHeaders = new Headers(req.headers);
  requestHeaders.delete("x-middleware-prefetch");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
