import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16 bg-beige-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center rounded-xl shadow-md mx-4 lg:mx-auto overflow-hidden" style={{ backgroundImage: 'url('/images/hero-background.jpg')' }}>
        <div className="absolute inset-0 bg-beige-300 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Sağlıklı Yaşam İçin Doğru Adres
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Uzman Diyetisyen Esra Eroğlu ile sağlıklı beslenme ve yaşam tarzı değişikliği için profesyonel danışmanlık hizmetleri.
          </p>
          <a
            href="/iletisim"
            className="bg-beige-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-beige-700 transition-colors shadow-lg inline-block"
          >
            Randevu Al
          </a>
        </div>
      </section>

      {/* Hizmetler Section */}
      <section className="py-16 bg-beige-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-beige-600 mb-4">Kilo Yönetimi</h3>
              <p className="text-gray-700">
                Kişiye özel beslenme programları ile sağlıklı kilo verme ve alma süreçlerinde profesyonel destek.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-beige-600 mb-4">Hastalıklarda Beslenme</h3>
              <p className="text-gray-700">
                Diyabet, hipertansiyon, kolesterol gibi hastalıklarda özel beslenme programları.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-beige-600 mb-4">Online Danışmanlık</h3>
              <p className="text-gray-700">
                Uzaktan görüşme ile online beslenme danışmanlığı hizmetleri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz Section */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-beige-600 text-2xl">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Uzman Kadro</h3>
                  <p className="text-gray-700">Alanında uzman diyetisyenler ile profesyonel hizmet</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-beige-600 text-2xl">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Kişiye Özel Programlar</h3>
                  <p className="text-gray-700">Size özel hazırlanan beslenme programları</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-beige-600 text-2xl">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Sürekli Destek</h3>
                  <p className="text-gray-700">Süreç boyunca sürekli iletişim ve destek</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/why-choose-us.jpg" 
                alt="Neden Bizi Tercih Etmelisiniz?" 
                layout="fill" 
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-beige-500 text-white text-center rounded-xl shadow-md mx-4 lg:mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Sağlıklı Yaşama İlk Adımı Atın
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Size özel beslenme programı için hemen randevu alın ve sağlıklı yaşama başlayın.
          </p>
          <a
            href="/iletisim"
            className="bg-white text-beige-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            Randevu Al
          </a>
        </div>
      </section>
    </div>
  );
}

