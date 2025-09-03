"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Camera, Clock, Users } from "lucide-react"

interface TourismDestination {
  id: number
  name: string
  category: string
  description: string
  highlights: string[]
  mapEmbedUrl: string
  image: string
  openHours: string
  bestTime: string
}

const tourismData: TourismDestination[] = [
  {
    id: 1,
    name: "Saung Tani Ciawijapura",
    category: "Wisata Alam ",
    description:
      "Destinasi wisata yang menggabungkan keindahan alam pedesaan dengan pengalaman kuliner autentik. Tempat yang sempurna untuk menikmati suasana pedesaan yang asri sambil menikmati makanan tradisional.",
    highlights: [
      "Pemandangan sawah yang indah",
            "Suasana pedesaan",
      "Spot foto instagramable",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.265948270098!2d108.58895129999996!3d-6.858695200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1b638146a0a3%3A0x97ef4aa9e5eeb3a0!2ssaung%20tani%20ciawijapura!5e0!3m2!1sid!2sid!4v1756746966192!5m2!1sid!2sid",
    image: "saung.jpg",
    openHours: "08:00 - 17:00 WIB",
    bestTime: "Pagi dan Sore Hari",
  },
  {
    id: 2,
    name: "Gunung Singkil - Situs Chinese Cemetery",
    category: "Wisata Sejarah & Budaya",
    description:
      "Situs bersejarah yang menyimpan prasasti kuno bertuliskan huruf Hanzi dari masa Dinasti Qing. Tempat ini menjadi saksi bisu perjalanan sejarah dan budaya Tionghoa di Jawa Barat.",
    highlights: [
      "Prasasti bersejarah Dinasti Qing",
      "Tulisan Hanzi kuno",
      "Nilai sejarah tinggi",
      "Destinasi edukasi budaya",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.241049353713!2d108.59430407403471!3d-6.861688667130721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1ac3ab1f4049%3A0x55770e11dce8e3f2!2sGunung%20Singkil%2C%20Situs%20Chinese%20Cemetery!5e0!3m2!1sid!2sid!4v1756742969623!5m2!1sid!2sid",
    image: "singkil.jpeg",
    openHours: "24 Jam",
    bestTime: "Pagi Hari (07:00-10:00 & 14:00 - 18:00)",
  },
]

export function TourismSection() {
  return (
    <section id="wisata" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 font-[var(--font-playfair)]">
            Destinasi Wisata
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Jelajahi keindahan alam dan kekayaan sejarah Desa Ciawijapura
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tourismData.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">{destination.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-foreground font-[var(--font-playfair)]">
                  {destination.name}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">{destination.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Camera className="h-4 w-4 text-accent" />
                    Daya Tarik Utama:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs justify-start">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-accent" />
                    <div>
                      <div className="font-medium">Jam Buka</div>
                      <div>{destination.openHours}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-accent" />
                    <div>
                      <div className="font-medium">Waktu Terbaik</div>
                      <div>{destination.bestTime}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    Lokasi:
                  </h4>
                  <div className="rounded-lg overflow-hidden border">
                    <iframe
                      src={destination.mapEmbedUrl}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <MapPin className="h-4 w-4 mr-2" />
                    Petunjuk Arah
                  </Button>
                  {/* <Button size="sm" className="flex-1 bg-accent hover:bg-accent/90">
                    <Camera className="h-4 w-4 mr-2" />
                    Galeri Foto
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
