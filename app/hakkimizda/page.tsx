import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 text-center mb-16">Hakkımızda</h1>
      
      <div className="space-y-20">
        {/* Uzman Diyetisyen Hakkında Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-white p-10 rounded-lg shadow-xl">
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/images/esra-eroglu.jpg" 
              alt="Uzman Diyetisyen Esra Eroğlu" 
              layout="fill" 
              objectFit="cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-beige-700 border-b-2 border-beige-600 pb-3">Uzman Diyetisyen Esra Eroğlu</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Uzman Diyetisyen Esra Eroğlu, beslenme ve diyetetik alanında uzun yıllara dayanan deneyimiyle, 
              bireylere sağlıklı yaşam ve beslenme konusunda profesyonel danışmanlık hizmeti sunmaktadır. 
              Kişiye özel beslenme programları ile danışanlarının sağlık hedeflerine ulaşmalarında yardımcı olmaktadır.
              Sağlıklı beslenmeyi sadece bir diyet listesi olarak değil, sürdürülebilir bir yaşam biçimi olarak benimseyen Esra Eroğlu, danışanlarına motive edici ve bilimsel temelli destek sağlamaktadır.
            </p>
          </div>
        </section>

        {/* Misyon ve Vizyon Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 bg-beige-100 p-10 rounded-lg shadow-xl">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-beige-700 border-b-2 border-beige-600 pb-3">Misyonumuz</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Sağlıklı beslenme alışkanlıkları kazandırarak, bireylerin yaşam kalitesini artırmak ve 
              sürdürülebilir bir yaşam tarzı oluşturmalarına yardımcı olmak için çalışıyoruz. 
              Her danışanımızın kendine özgü ihtiyaçlarını anlayarak, kişiselleştirilmiş çözümler sunuyoruz. 
              Bilgi ve tecrübemizi kullanarak, danışanlarımızın potansiyellerini en üst düzeye çıkarmalarını hedefliyoruz.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-beige-700 border-b-2 border-beige-600 pb-3">Vizyonumuz</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Toplumda sağlıklı beslenme bilincini yaygınlaştırmak ve her bireyin kendi sağlığını 
              yönetebilmesi için gerekli bilgi ve becerileri kazanmasına yardımcı olmak istiyoruz. 
              Bilimsel temelli yaklaşımımızla, sürdürülebilir sağlık çözümleri sunmayı hedefliyoruz. 
              Beslenme alanındaki güncel gelişmeleri takip ederek, en doğru ve etkili yöntemleri danışanlarımızla buluşturuyoruz.
            </p>
          </div>
        </section>

        {/* Değerlerimiz Section */}
        <section className="bg-white p-10 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 border-b-2 border-beige-600 pb-3">Değerlerimiz</h2>
          <ul className="list-none space-y-6 text-gray-700 text-lg text-center grid grid-cols-1 md:grid-cols-3 gap-8">
            <li className="p-4 rounded-lg bg-beige-50 shadow-sm">
              <span className="text-beige-700 text-3xl font-bold block mb-3">✓</span>
              Bilimsel ve kanıta dayalı yaklaşım
            </li>
            <li className="p-4 rounded-lg bg-beige-50 shadow-sm">
            <span className="text-beige-700 text-3xl font-bold block mb-3">✓</span>
              Kişiye özel çözümler
            </li>
            <li className="p-4 rounded-lg bg-beige-50 shadow-sm">
            <span className="text-beige-700 text-3xl font-bold block mb-3">✓</span>
              Profesyonel etik değerler
            </li>
            <li className="p-4 rounded-lg bg-beige-50 shadow-sm">
            <span className="text-beige-700 text-3xl font-bold block mb-3">✓</span>
              Sürekli gelişim ve yenilik
            </li>
            <li className="p-4 rounded-lg bg-beige-50 shadow-sm">
            <span className="text-beige-700 text-3xl font-bold block mb-3">✓</span>
              Danışan odaklı hizmet anlayışı
            </li>
          </ul>
        </section>

        {/* Eğitim ve Sertifikalar Section */}
        <section className="bg-beige-100 p-10 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 border-b-2 border-beige-600 pb-3">Eğitim ve Sertifikalar</h2>
          <ul className="list-none space-y-6 text-gray-700 text-lg text-center grid grid-cols-1 md:grid-cols-2 gap-8">
            <li className="p-4 rounded-lg bg-beige-50 shadow-sm">
              <span className="text-beige-700 text-3xl font-bold block mb-3">🎓</span>
              Beslenme ve Diyetetik Lisans Derecesi
            </li>
            <li className="p-4 rounded-lg bg-beige-50 shadow-sm">
            <span className="text-beige-700 text-3xl font-bold block mb-3">🏆</span>
              Uzmanlık Sertifikaları
            </li>
            <li className="p-4 rounded-lg bg-beige-50 shadow-sm">
            <span className="text-beige-700 text-3xl font-bold block mb-3">📚</span>
              Sürekli Eğitim Programları
            </li>
            <li className="p-4 rounded-lg bg-beige-50 shadow-sm">
            <span className="text-beige-700 text-3xl font-bold block mb-3">📈</span>
              Mesleki Gelişim Kursları
            </li>
          </ul>
        </section>

      </div>
    </div>
  )
} 