"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Star, ShoppingBag } from "lucide-react"

interface UMKMBusiness {
  id: number
  name: string
  category: string
  description: string
  phone: string
  location: string
  rating: number
  image: string
  specialties: string[]
}

const umkmData: UMKMBusiness[] = [
  {
    id: 1,
    name: "Rosy Cake",
    category: "Kue & Bakery",
    description:
      "Spesialis kue dan berbagai kue dengan cita rasa autentik dan kualitas terbaik.",
    phone: "62811358286929",
    location: "RT5 RW02",
    rating: 4.9,
    image: "ROSY CAKE (1).jpg",
    specialties: ["Wedding Cake", "Birthday Cake", "Kue Tradisional", "Custom Design"],
  },
  {
    id: 2,
    name: "MIRONG IBU WANTI",
    category: "Makanan Tradisional",
    description:
      "Makanan tradisional khas daerah dengan resep turun temurun yang telah terjaga keasliannya selama bertahun-tahun.",
    phone: "6285722004089",
    location: "RT6 RW02",
    rating: 4.7,
    image: "mirong.jpeg",
    specialties: ["Mirong Tradisional", "Makanan Khas", "Resep Turun Temurun", "Organik"],
  },
  {
    id: 3,
    name: "RAI CAKE & CATERING",
    category: "Catering & Event",
    description: "Layanan catering lengkap untuk berbagai acara dengan menu variatif dan pelayanan profesional.",
    phone: "6283120603455",
    location: "Desa Ciawijapura",
    rating: 5.0,
    image: "raicake.jpg",
    specialties: ["Wedding Catering", "Corporate Event", "Birthday Party", "Traditional Menu"],
  },
  {
    id: 4,
    name: "Roti Fa'iz",
    category: "Roti & Bakery",
    description:
      "Roti segar setiap hari dengan berbagai varian rasa dan topping yang lezat, cocok untuk sarapan keluarga.",
    phone: "",
    location: "Desa Ciawijapura",
    rating: 5.0,
    image: "/fresh-indonesian-bread-and-pastries-faiz-bakery.png",
    specialties: ["Roti Tawar", "Roti Manis", "Pastry", "Roti Sobek"],
  },
  {
    id: 5,
    name: "Berlin Bakery",
    category: "Bakery Modern",
    description:
      "Bakery modern dengan konsep Eropa yang menyajikan roti dan kue berkualitas tinggi dengan bahan premium.",
    phone: "-",
    location: "Desa Ciawijapura",
    rating: 4.6,
    image: "/modern-european-style-bakery-with-premium-bread.png",
    specialties: ["European Bread", "Premium Pastry", "Artisan Cake", "Coffee Pairing"],
  },
]

export function UMKMSection() {
  const handleCallBusiness = (phone: string, businessName: string) => {
    if (phone && phone !== "-") {
      // Pastikan nomor diawali dengan "62" (kode Indonesia) dan tanpa spasi/tanda khusus
      const normalizedPhone = phone.replace(/^0/, "6282120429471").replace(/[^0-9]/g, "");
      window.open(`https://wa.me/${normalizedPhone}?text=Halo%20${encodeURIComponent(businessName)},%20saya%20tertarik%20dengan%20produk%20UMKM%20Anda`, "_blank");
    } else {
      alert(`Nomor WhatsApp ${businessName} belum tersedia`);
    }
  }

  return (
    <section id="umkm" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 font-[var(--font-playfair)]">
            UMKM Unggulan Desa
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dukung ekonomi lokal dengan produk berkualitas dari pelaku UMKM Desa Ciawijapura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {umkmData.map((business) => (
            <Card
              key={business.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={business.image || "/placeholder.svg"}
                  alt={business.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">{business.category}</Badge>
                </div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{business.rating}</span>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">{business.name}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {business.location}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">{business.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Spesialisasi:</h4>
                  <div className="flex flex-wrap gap-2">
                    {business.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                    onClick={() => handleCallBusiness(business.phone, business.name)}
                    disabled={!business.phone || business.phone === "-"}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {business.phone && business.phone !== "-" ? "Hubungi" : "Segera"}
                  </Button>
                  {/* <Button size="sm" className="flex-1 bg-accent hover:bg-accent/90">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Detail
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-accent/5 to-secondary/5 border-accent/20 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl text-foreground mb-2 font-[var(--font-playfair)]">Ingin Bergabung?</h3>
              <p className="text-muted-foreground mb-4">
                Daftarkan UMKM Anda untuk menjadi bagian dari direktori bisnis Desa Ciawijapura
              </p>
              <Button
                className="bg-accent hover:bg-accent/90"
                onClick={() => {
                  const adminPhone = "6282120429471"; // ganti dengan nomor admin WhatsApp
                  const message = "Halo Admin, saya ingin mendaftarkan UMKM saya ke direktori Desa Ciawijapura.";
                  window.open(`https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`, "_blank");
                }}
              >
                Daftar UMKM Baru
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
