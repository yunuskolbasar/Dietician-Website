import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esra Eroğlu - Diyetisyen",
  description: "Uzman Diyetisyen Esra Eroğlu - Sağlıklı Yaşam ve Beslenme Danışmanlığı",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-[#F5F5DC]`}>
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-[#8B7355]">Esra Eroğlu</h1>
              <div className="space-x-6">
                <a href="/" className="text-[#8B7355] hover:text-[#A67B5B]">Ana Sayfa</a>
                <a href="/hakkimizda" className="text-[#8B7355] hover:text-[#A67B5B]">Hakkımızda</a>
                <a href="/hizmetlerimiz" className="text-[#8B7355] hover:text-[#A67B5B]">Hizmetlerimiz</a>
                <a href="/blog" className="text-[#8B7355] hover:text-[#A67B5B]">Blog</a>
                <a href="/iletisim" className="text-[#8B7355] hover:text-[#A67B5B]">İletişim</a>
              </div>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-[#8B7355] text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">İletişim</h3>
                <p>Email: info@esraeroglu.com</p>
                <p>Tel: +90 XXX XXX XX XX</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Adres</h3>
                <p>İstanbul, Türkiye</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Sosyal Medya</h3>
                <div className="space-x-4">
                  <a href="#" className="hover:text-[#F5F5DC]">Instagram</a>
                  <a href="#" className="hover:text-[#F5F5DC]">Facebook</a>
                  <a href="#" className="hover:text-[#F5F5DC]">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p>&copy; {new Date().getFullYear()} Esra Eroğlu. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
