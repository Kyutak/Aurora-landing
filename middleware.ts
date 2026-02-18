import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl
  const src = url.searchParams.get('src')

  if (src) {
    return NextResponse.redirect(new URL(`/qr/${src}`, request.url))
  }

  return NextResponse.next()
}
