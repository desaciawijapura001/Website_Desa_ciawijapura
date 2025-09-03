"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Scroll, Mountain } from "lucide-react"

export function VillageHistory() {
  return (
    <section id="sejarah" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
            Sejarah Desa Ciawijapura
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Desa Ciawijapura menyimpan pesona sejarah masa lalu yang masih tersembunyi dan menjadi keunikan tersendiri
            bagi wilayah ini
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                  <MapPin className="h-6 w-6 text-accent" />
                  Lokasi Strategis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Desa Ciawijapura terletak di pinggir ruas jalur Sindanglaut-Ciawigajah, Kecamatan Susukanlebak,
                  Kabupaten Cirebon. Posisi strategis ini menjadikan desa sebagai saksi perjalanan sejarah yang panjang.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                  <Scroll className="h-6 w-6 text-accent" />
                  Prasasti Bersejarah
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Keistimewaan Desa Ciawijapura terletak pada keberadaan situs prasasti bertuliskan huruf Hanzi (huruf
                  Bahasa Mandarin) yang tercetak di tiga batu besar. Prasasti ini terletak di bukit kecil arah selatan
                  desa dan menjadi saksi bisu perjalanan sejarah yang panjang.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Keberadaan prasasti ini menarik untuk diteliti lebih dalam dan berpotensi menjadi salah satu destinasi
                  wisata sejarah di Kabupaten Cirebon.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                  <Mountain className="h-6 w-6 text-accent" />
                  Makna Prasasti
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      "Keresidenan Chao Zhou, Kabupaten Jie Yang Desa Xi Qi Xii, diletakkan pada tahun ke-28 Kaisar Dao
                      Guang makam almarhum ayahanda Xii Ya Xiao Dinasti Qing, almarhum ibunda keluarga Xii bermarga
                      (suku) Lin putra yang berbakti Qian Wan, Qian Jian, Qian Cheng, Qian Ying bersama-sama meletakkan
                      batu"
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Pada batu yang terletak di sebelah timur terdapat tulisan "Hou Fu" yang artinya Dewa Bumi, sedangkan
                    satu batu yang terletak di sebelah selatan bertuliskan "Xii Shi Zu".
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ketiga prasasti ini memberikan gambaran tentang tradisi pemakaman dan penghormatan leluhur dalam
                    budaya Tionghoa pada masa Dinasti Qing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-accent/5 to-secondary/5 border-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-foreground font-[var(--font-playfair)]">
              Potensi Wisata Sejarah
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              Keberadaan prasasti bersejarah ini menjadikan Desa Ciawijapura memiliki potensi besar sebagai destinasi
              wisata sejarah dan budaya. Situs ini tidak hanya menarik bagi para peneliti dan sejarawan, tetapi juga
              bagi wisatawan yang ingin mempelajari jejak peradaban masa lalu di tanah Jawa Barat. Dengan pengembangan
              yang tepat, situs prasasti Ciawijapura dapat menjadi salah satu aset wisata sejarah yang berharga bagi
              Kabupaten Cirebon, sekaligus melestarikan warisan budaya untuk generasi mendatang.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
