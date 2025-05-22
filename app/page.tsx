import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20 bg-beige-50 text-gray-800 leading-relaxed">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center rounded-b-3xl shadow-lg overflow-hidden" style={{ backgroundImage: 'url('/images/hero-background.jpg')' }}>
        <div className="absolute inset-0 bg-beige-400 opacity-75"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Sağlıklı Yaşam İçin Doğru Adres
          </h1>
          <p className="text-xl md:text-2xl text-beige-100 mb-10 max-w-3xl mx-auto drop-shadow-md">
            Uzman Diyetisyen Esra Eroğlu ile sağlıklı beslenme ve yaşam tarzı değişikliği için profesyonel danışmanlık hizmetleri.
          </p>
          <a
            href="/iletisim"
            className="bg-white text-beige-700 px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors shadow-xl inline-block"
          >
            Randevu Al
          </a>
        </div>
      </section>

      {/* Hizmetler Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
            Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-beige-50 p-10 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <h3 className="text-2xl font-bold text-beige-700 mb-4">Kilo Yönetimi</h3>
              <p className="text-gray-700">
                Kişiye özel beslenme programları ile sağlıklı kilo verme ve alma süreçlerinde profesyonel destek.
              </p>
            </div>
            <div className="bg-beige-50 p-10 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <h3 className="text-2xl font-bold text-beige-700 mb-4">Hastalıklarda Beslenme</h3>
              <p className="text-gray-700">
                Diyabet, hipertansiyon, kolesterol gibi hastalıklarda özel beslenme programları.
              </p>
            </div>
            <div className="bg-beige-50 p-10 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <h3 className="text-2xl font-bold text-beige-700 mb-4">Online Danışmanlık</h3>
              <p className="text-gray-700">
                Uzaktan görüşme ile online beslenme danışmanlığı hizmetleri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz Section */}
      <section className="py-20 bg-beige-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 text-lg">
              <div className="flex items-start space-x-4">
                <div className="text-beige-700 text-3xl mt-1">✓</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Uzman Kadro</h3>
                  <p className="text-gray-800">Alanında uzman diyetisyenler ile profesyonel hizmet</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-beige-700 text-3xl mt-1">✓</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Kişiye Özel Programlar</h3>
                  <p className="text-gray-800">Size özel hazırlanan beslenme programları</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-beige-700 text-3xl mt-1">✓</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sürekli Destek</h3>
                  <p className="text-gray-800">Süreç boyunca sürekli iletişim ve destek</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/neden-biz.jpg" 
                alt="Neden Bizi Tercih Etmelisiniz?" 
                layout="fill" 
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-beige-700 text-white text-center rounded-xl shadow-lg mx-auto my-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Sağlıklı Yaşama İlk Adımı Atın
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Size özel beslenme programı için hemen randevu alın ve sağlıklı yaşama başlayın.
          </p>
          <a
            href="/iletisim"
            className="bg-white text-beige-700 px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors shadow-xl inline-block"
          >
            Randevu Al
          </a>
        </div>
      </section>
    </div>
  );
}

