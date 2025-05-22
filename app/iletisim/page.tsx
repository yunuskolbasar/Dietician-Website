export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[#8B7355] mb-8">İletişim</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* İletişim Bilgileri */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-[#8B7355] mb-4">İletişim Bilgileri</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#8B7355]">Adres</h3>
                <p className="text-gray-700">
                  Örnek Mahallesi, Örnek Sokak No:123<br />
                  Kadıköy, İstanbul
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#8B7355]">Telefon</h3>
                <p className="text-gray-700">+90 XXX XXX XX XX</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#8B7355]">E-posta</h3>
                <p className="text-gray-700">info@esraeroglu.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#8B7355]">Çalışma Saatleri</h3>
                <p className="text-gray-700">
                  Pazartesi - Cuma: 09:00 - 18:00<br />
                  Cumartesi: 10:00 - 15:00<br />
                  Pazar: Kapalı
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#8B7355] mb-4">Sosyal Medya</h2>
            <div className="space-y-2">
              <a href="#" className="block text-gray-700 hover:text-[#8B7355]">Instagram</a>
              <a href="#" className="block text-gray-700 hover:text-[#8B7355]">Facebook</a>
              <a href="#" className="block text-gray-700 hover:text-[#8B7355]">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* İletişim Formu */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#8B7355] mb-4">Bize Ulaşın</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Ad Soyad</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                placeholder="Adınız Soyadınız"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">E-posta</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                placeholder="ornek@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">Telefon</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                placeholder="05XX XXX XX XX"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Mesajınız</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355]"
                placeholder="Mesajınızı buraya yazın..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#8B7355] text-white px-6 py-3 rounded-lg hover:bg-[#A67B5B] transition-colors"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>

      {/* Harita */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#8B7355] mb-4">Konum</h2>
        <div className="h-[400px] bg-gray-200 rounded-lg">
          {/* Buraya Google Maps veya başka bir harita servisi entegre edilebilir */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Harita burada görüntülenecek
          </div>
        </div>
      </div>
    </div>
  )
} 