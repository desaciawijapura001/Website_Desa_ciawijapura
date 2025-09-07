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
    title: "Kuwu Ciawijapura Susukanlebak Umumkan Pengurus Baru BumDes",
    excerpt: "Kuwu Desa Ciawijapura, Kecamatan Susukanlebak, resmi mengumumkan pengangkatan pengurus Badan Usaha Milik Desa (BumDes). Langkah ini dilakukan sebagai upaya memperkuat peran BumDes dalam menggerakkan roda perekonomian desa dan meningkatkan kesejahteraan masyarakat.Dalam kesempatan tersebut, Kuwu menegaskan bahwa keberadaan pengurus baru diharapkan mampu membawa inovasi serta mengembangkan berbagai unit usaha desa agar lebih produktif dan bermanfaat. Selain itu, pengurus BumDes juga diminta untuk menjaga transparansi, akuntabilitas, dan bekerja sama dengan masyarakat demi tercapainya pembangunan desa yang berkelanjutan.",
    content:
      "Kuwu Ciawijapura Susukanlebak Umumkan Pengurus Baru BumDes",
    date: "2025-09-07",
    image: "https://www.youtube.com/embed/CUkmiPX76PM?si=4ObLaEEUaAvASrF_", // gunakan link embed YouTube di sini
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
