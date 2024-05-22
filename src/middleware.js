import { NextResponse } from "next/server";

export async function middleware(req) {
  const { locale, pathname } = req.nextUrl;
  console.log("middleware: ", pathname);

  return NextResponse.next();
}
