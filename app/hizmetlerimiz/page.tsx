export default function Services() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[#8B7355] mb-8">Hizmetlerimiz</h1>

      <div className="space-y-12">
        {/* Kilo Yönetimi */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#8B7355] mb-4">Kilo Yönetimi</h2>
          <p className="text-gray-700 mb-4">
            Sağlıklı kilo verme ve alma süreçlerinde size özel beslenme programları sunuyoruz. 
            Hedeflerinize ulaşmanız için profesyonel destek sağlıyoruz.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Kişiye özel beslenme programı</li>
            <li>Düzenli takip ve değerlendirme</li>
            <li>Yaşam tarzı değişikliği danışmanlığı</li>
            <li>Motivasyon desteği</li>
          </ul>
        </section>

        {/* Hastalıklarda Beslenme */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#8B7355] mb-4">Hastalıklarda Beslenme</h2>
          <p className="text-gray-700 mb-4">
            Çeşitli sağlık durumlarına özel beslenme programları ile tedavi sürecinize destek oluyoruz.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Diyabet beslenmesi</li>
            <li>Hipertansiyon beslenmesi</li>
            <li>Kolesterol yönetimi</li>
            <li>Böbrek hastalıkları beslenmesi</li>
            <li>Çölyak ve besin alerjileri</li>
          </ul>
        </section>

        {/* Online Danışmanlık */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#8B7355] mb-4">Online Danışmanlık</h2>
          <p className="text-gray-700 mb-4">
            Uzaktan görüşme ile online beslenme danışmanlığı hizmeti sunuyoruz. 
            Meşgul hayatınıza uygun, esnek bir çözüm.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Video görüşmeleri</li>
            <li>Online beslenme takibi</li>
            <li>Dijital beslenme programları</li>
            <li>7/24 mesajlaşma desteği</li>
          </ul>
        </section>

        {/* Sporcu Beslenmesi */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#8B7355] mb-4">Sporcu Beslenmesi</h2>
          <p className="text-gray-700 mb-4">
            Sporcuların performansını artırmak ve hedeflerine ulaşmalarını sağlamak için 
            özel beslenme programları hazırlıyoruz.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Performans odaklı beslenme</li>
            <li>Antrenman öncesi ve sonrası beslenme</li>
            <li>Yarışma beslenmesi</li>
            <li>Kilo kontrolü</li>
          </ul>
        </section>

        {/* Hamilelik ve Emzirme Dönemi Beslenmesi */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#8B7355] mb-4">Hamilelik ve Emzirme Dönemi Beslenmesi</h2>
          <p className="text-gray-700 mb-4">
            Anne ve bebek sağlığı için özel beslenme programları sunuyoruz.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Hamilelik beslenmesi</li>
            <li>Emzirme dönemi beslenmesi</li>
            <li>Bebek beslenmesi danışmanlığı</li>
            <li>Doğum sonrası kilo kontrolü</li>
          </ul>
        </section>
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-[#8B7355] mb-4">
          Size Özel Beslenme Programı İçin
        </h2>
        <p className="text-gray-700 mb-6">
          Hizmetlerimiz hakkında daha detaylı bilgi almak ve randevu oluşturmak için bizimle iletişime geçin.
        </p>
        <a
          href="/iletisim"
          className="bg-[#8B7355] text-white px-8 py-3 rounded-lg hover:bg-[#A67B5B] transition-colors inline-block"
        >
          İletişime Geç
        </a>
      </div>
    </div>
  )
} 