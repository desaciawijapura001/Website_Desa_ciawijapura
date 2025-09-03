"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart } from "lucide-react"

const mottoItems = [
  { letter: "T", word: "Transparan" },
  { letter: "E", word: "Efektif" },
  { letter: "R", word: "Responsif" },
  { letter: "B", word: "Bersih" },
  { letter: "A", word: "Akuntabel" },
  { letter: "I", word: "Inovatif" },
  { letter: "K", word: "Kompetitif" },
]

const missionItems = [
  "Meningkatkan kualitas pelayanan publik yang prima dan transparan",
  "Mengembangkan potensi ekonomi desa melalui UMKM dan pariwisata",
  "Melestarikan nilai-nilai religius dan budaya lokal",
  "Menciptakan lingkungan yang bersih, sehat, dan berkelanjutan",
  "Membangun keamanan dan ketertiban yang kondusif",
  "Mendorong inovasi dan kreativitas masyarakat",
  "Memperkuat solidaritas dan gotong royong",
  "Meningkatkan kualitas sumber daya manusia",
  "Mengoptimalkan pemanfaatan teknologi informasi",
  "Membangun infrastruktur yang memadai dan berkelanjutan",
]

export function VisionMission() {
  return (
    <section id="visi-misi" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
            Visi & Misi Desa
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Komitmen kami untuk membangun Desa Ciawijapura yang lebih maju dan sejahtera
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Motto */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                <Heart className="h-6 w-6 text-accent" />
                Motto Desa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-accent font-[var(--font-playfair)] mb-2">TERBAIK</div>
              </div>
              <div className="space-y-3">
                {mottoItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Badge
                      variant="secondary"
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                    >
                      {item.letter}
                    </Badge>
                    <span className="text-muted-foreground">{item.word}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                <Eye className="h-6 w-6 text-accent" />
                Visi Desa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                <p className="text-foreground leading-relaxed text-lg font-medium">
                  "Menjadikan Desa Ciawijapura lebih maju, berprestasi, berbudaya, dan kreatif dalam rangka mewujudkan
                  masyarakat yang sejahtera, mandiri, dan bermartabat berdasarkan nilai-nilai agama, adat istiadat, dan
                  budaya lokal yang luhur."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
              <Target className="h-7 w-7 text-accent" />
              Misi Desa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {missionItems.map((mission, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <Badge
                    variant="outline"
                    className="mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold"
                  >
                    {index + 1}
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed">{mission}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
