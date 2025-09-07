"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, Eye } from "lucide-react"

interface NewsItem {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  image: string
  category: string
}

// ...existing code...
const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Gubernur Jabar KDM Borong 2 Ton Melon Warga Ciawijapura Cirebon",
    excerpt: "kunjungan ke Desa Ciawijapura, Cirebon, Gubernur Jawa Barat KDM memborong dua ton melon hasil panen petani lokal yang tergabung dalam BumDes.",
    content: "Dalam kunjungan ke Desa Ciawijapura, Cirebon, Gubernur Jawa Barat KDM memborong dua ton melon hasil panen petani lokal yang tergabung dalam BumDes. Kehadirannya disambut antusias warga dengan kesenian tradisional, didampingi Kuwu Ade Sri Sumartini dan Kapolresta Cirebon Kombes Sumarni. KDM mengapresiasi keberhasilan petani membudidayakan melon secara mandiri. Seluruh hasil panen senilai Rp30 juta langsung dibeli dan diminta untuk dibagikan kepada masyarakat kurang mampu di desa tersebut.",
    date: "2025-09-01",
    image: "gubernur.png",
    category: "Acara",
  },
  {
    id: 2,
    title: "KKM UMC 2025 : Mahasiswa Hadirkan Inovasi Digital, UMKM, dan Ketahanan Pangan di Desa Ciawijapura",
    excerpt: "Kuliah Kerja Mahasiswa (KKM) Universitas Muhammadiyah Cirebon tahun 2024 digelar di Desa Ciawijapura, Kecamatan Susukan Lebak, sejak 2 Agustus hingga 12 September.",
    content: "Kuliah Kerja Mahasiswa (KKM) Universitas Muhammadiyah Cirebon tahun 2024 digelar di Desa Ciawijapura, Kecamatan Susukan Lebak, sejak 2 Agustus hingga 12 September. Mengusung tema Digital Marketing, UMKM, dan Ketahanan Pangan, mahasiswa berfokus mendukung pemasaran produk lokal melalui strategi digital, peningkatan daya saing UMKM, serta kesadaran pentingnya ketahanan pangan desa. Kehadiran mereka diharapkan memberi dampak positif dalam peningkatan keterampilan, pemanfaatan teknologi, dan pengembangan usaha masyarakat.",
    date: "2025-009-01",
    image: "kkm.jpg",
    category: "Kegiatan",
  },
    {
    id: 3,
    title: "Suara Pemuda Desa: Tingkatkan Pertanian Lewat Podcast Bersama BumDes",
    excerpt: "Suara Pemuda Desa: Tingkatkan Pertanian Lewat Podcast Bersama BumDes",
    content:
      "Pemuda Desa Ciawijapura berinisiatif mengangkat isu pertanian melalui podcast bersama Badan Usaha Milik Desa (BumDes). Kegiatan ini menjadi wadah bagi generasi muda untuk menyuarakan ide, berbagi pengalaman, serta mendorong inovasi dalam sektor pertanian desa. <p>Melalui podcast tersebut, para pemuda berharap dapat memperkuat sinergi dengan BumDes dalam mengembangkan pertanian yang lebih modern dan berkelanjutan. Selain sebagai sarana edukasi, program ini juga diharapkan mampu memotivasi masyarakat, khususnya kaum muda, agar semakin peduli dan terlibat aktif dalam memajukan pertanian desa.",
    date: "2025-09-07",
    image: "...", // gunakan link embed YouTube di sini
    category: "Berita",
  },
  {
    id: 4,
    title: "Datang ke Ciawijapura Cirebon, Gubernur Jabar Dedi Mulyadi Borong 2 Ton Melon Petani",
    excerpt: "Datang ke Ciawijapura Cirebon, Gubernur Jabar Dedi Mulyadi Borong 2 Ton Melon Petani",
    content:
      "TRIBUNCIREBON.COM - Gubernur Jawa Barat, Kang Dedi Mulyadi (KDM), mendapat sambutan hangat dari ratusan warga saat berkunjung ke Desa Ciawijapura, Kecamatan Susukan Lebak, Kabupaten Cirebon, pada Kamis (26/6/2025). Dalam kunjungan tersebut, KDM secara spontan memborong dua ton melon hasil panen petani lokal yang tergabung dalam Badan Usaha Milik Desa (BumDes). Warga yang sudah menanti sejak pagi tampak antusias menyambut kehadiran mantan Bupati Purwakarta itu. KDM datang mengenakan pakaian khas Sunda lengkap dengan ikat kepala dan langsung disambut kesenian tradisional setempat. Pantauan Tribun di lokasi, KDM sempat mengunjungi pekarangan yang ditanami buah melon. KDM didampingi langsung oleh Kepala Desa atau Kuwu CiawiJapura, Ade Sri Sumartini dan Kapolresta Cirebon, Kombes Sumarni. Di sana, KDM juga berdialog tentang teknis penanaman serta hasil pertanian di desa yang berada di sisi timur Kabupaten Cirebon itu. Usai mengunjungi kebun melon yang siap ditanam, KDM langsung diarahkan di panggung yang sudah disediakan. "Saya sengaja datang ke sini karena saya dengar para petani Desa Ciawijapura berhasil membudidayakan melon secara mandiri dan hasilnya luar biasa," ujar KDM saat berpidato di ratusan masyarakat, Kamis (26/6/2025). Tanpa pikir panjang, KDM langsung membeli seluruh hasil panen melon yang telah dipajang warga di lokasi acara. Total sebanyak dua ton melon dibeli dan rencananya akan dibagikan kepada masyarakat di Desa Ciawijapura yang kurang mampu. "Kalau dibawa ke rumah gak akan dimakan, silakan Bu Kuwu bagikan ke masyarakat, nanti saya transfer langsung Rp 30 juta," ucapnya. https://cirebon.tribunnews.com/2025/0.... Reporter: Eki Yulianto Editor: Rudy Laudza",
    date: "2025-09-07",
    image: "https://www.youtube.com/embed/OtcMaK7BZNo?si=4EkxL0aQeRVqgekI", // gunakan link embed YouTube di sini
    category: "Berita",
  },
]
// ...existing code...

export function NewsSection() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

  return (
    <section id="berita" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ...existing code... */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                {news.image.startsWith("https://www.youtube.com/embed") ? (
                  <iframe
                    src={news.image}
                    title={news.title}
                    className="w-full h-full object-cover"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {news.category}
                  </span>
                </div>
              </div>
              {/* ...existing code... */}
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">{news.excerpt}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full bg-transparent" onClick={() => setSelectedNews(news)}>
                      <Eye className="h-4 w-4 mr-2" />
                      Baca Selengkapnya
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-foreground font-[var(--font-playfair)]">
                        {news.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        {/* ...existing code... */}
                      </div>
                      {news.image.startsWith("https://www.youtube.com/embed") ? (
                        <iframe
                          src={news.image}
                          title={news.title}
                          className="w-full h-64 rounded-lg"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      ) : (
                        <img
                          src={news.image || "/placeholder.svg"}
                          alt={news.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      )}
                      <p className="text-foreground leading-relaxed">{news.content}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
// ...existing code...
