// Mengimpor komponen ClerkLoaded, ClerkLoading, dan SignIn dari "@clerk/nextjs"
// untuk mengelola otentikasi pengguna.
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
// Mengimpor ikon Loader2 dari "lucide-react" untuk menampilkan ikon pemuatan.
import { Loader2 } from "lucide-react";
// Mengimpor komponen Image dari "next/image" untuk menampilkan gambar yang dioptimalkan.
import Image from "next/image";

// Mendefinisikan komponen Page yang menjadi halaman utama.
export default function Page() {
  return (
    // Membuat div utama dengan kelas CSS untuk mengatur tampilan layar penuh dan grid kolom.
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Kolom pertama: Formulir sign-in */}
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        {/* Teks sambutan */}
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2e2a47]">
            Selamat datang kembali!
          </h1>
          <p className="text-base text-[#7e8ca0]">
            masuk atau buat akun untuk ke dashboard.
          </p>
        </div>
        {/* Area untuk komponen Clerk */}
        <div className="flex items-center justify-center mt-8">
          {/* Menampilkan formulir sign-in setelah Clerk dimuat */}
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          {/* Menampilkan ikon pemuatan selama Clerk masih dalam proses memuat */}
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      {/* Kolom kedua: Gambar logo yang hanya ditampilkan pada layar besar */}
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src={"/logo.svg"} height={100} width={100} alt="gambar logo" />
      </div>
    </div>
  );
}
