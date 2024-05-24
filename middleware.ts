// Mengimpor clerkMiddleware dan createRouteMatcher dari "@clerk/nextjs/server"
// untuk mengelola middleware Clerk dan membuat pencocok rute.
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// Mengimpor NextResponse dari "next/server" untuk menangani respons Next.js.
import { NextResponse } from "next/server";

// Membuat matcher rute untuk menentukan rute yang dilindungi.
// Dalam hal ini, semua rute di root ("/") dilindungi.
const isProtectedRoute = createRouteMatcher(["/"]);

// Mendefinisikan middleware Clerk dengan fungsi callback.
// Middleware ini akan memeriksa apakah rute yang diminta adalah rute yang dilindungi.
// Jika rute dilindungi, maka middleware akan mengaktifkan perlindungan otentikasi Clerk.
export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) {
    auth().protect(); // Mengaktifkan perlindungan otentikasi untuk rute yang dilindungi.
  }

  return NextResponse.next(); // Melanjutkan ke middleware atau handler berikutnya.
});

// Menentukan konfigurasi untuk pencocokan rute middleware.
// Rute yang dicocokkan adalah semua rute kecuali yang memiliki titik dua kali
// berturut-turut atau berada di direktori "_next".
// Selain itu, mencocokkan rute di root ("/"), serta rute di "api" atau "trpc".
export const config = {
  matcher: ["/((?!.*..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
