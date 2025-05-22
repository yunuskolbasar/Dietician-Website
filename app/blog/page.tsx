export default function Blog() {
  // Örnek blog yazıları
  const blogPosts = [
    {
      id: 1,
      title: "Sağlıklı Beslenmenin Temel İlkeleri",
      excerpt: "Sağlıklı bir yaşam için beslenme alışkanlıklarınızı nasıl düzenleyebileceğinizi öğrenin.",
      date: "15 Mart 2024",
      category: "Beslenme",
      image: "/blog/healthy-eating.jpg"
    },
    {
      id: 2,
      title: "Kilo Verme Sürecinde Yapılan Yaygın Hatalar",
      excerpt: "Kilo verme hedefinize ulaşmanızı engelleyen yaygın hataları ve çözüm önerilerini keşfedin.",
      date: "10 Mart 2024",
      category: "Kilo Kontrolü",
      image: "/blog/weight-loss.jpg"
    },
    {
      id: 3,
      title: "Diyabet ve Beslenme İlişkisi",
      excerpt: "Diyabet hastaları için önerilen beslenme düzeni ve dikkat edilmesi gereken noktalar.",
      date: "5 Mart 2024",
      category: "Hastalıklarda Beslenme",
      image: "/blog/diabetes.jpg"
    },
    {
      id: 4,
      title: "Sporcu Beslenmesi: Performansı Artırmanın Yolları",
      excerpt: "Sporcular için optimal performans sağlayacak beslenme stratejileri ve öneriler.",
      date: "1 Mart 2024",
      category: "Sporcu Beslenmesi",
      image: "/blog/sports-nutrition.jpg"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-[#8B7355] mb-8">Blog</h1>

      {/* Kategoriler */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#8B7355] text-white px-4 py-2 rounded-lg hover:bg-[#A67B5B] transition-colors">
            Tümü
          </button>
          <button className="bg-white text-[#8B7355] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Beslenme
          </button>
          <button className="bg-white text-[#8B7355] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Kilo Kontrolü
          </button>
          <button className="bg-white text-[#8B7355] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Hastalıklarda Beslenme
          </button>
          <button className="bg-white text-[#8B7355] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Sporcu Beslenmesi
          </button>
        </div>
      </div>

      {/* Blog Yazıları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200">
              {/* Blog görseli burada olacak */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Görsel
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#8B7355]">{post.category}</span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold text-[#8B7355] mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <a
                href={`/blog/${post.id}`}
                className="text-[#8B7355] hover:text-[#A67B5B] font-semibold"
              >
                Devamını Oku →
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Sayfalama */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
            Önceki
          </button>
          <button className="px-4 py-2 bg-[#8B7355] text-white rounded-lg">
            1
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
            3
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
            Sonraki
          </button>
        </nav>
      </div>
    </div>
  )
} 