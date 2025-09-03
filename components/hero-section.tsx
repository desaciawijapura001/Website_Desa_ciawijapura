"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroImages = [
  {
    url: "ciawijapura.jpeg",
    title: "Selamat Datang di Desa Ciawijapura",
    subtitle: "Desa yang Berkembang dengan Tradisi dan Inovasi",
  },
  {
    url: "melonciawijapura1.jpeg",
    title: "UMKM Unggulan Desa",
    subtitle: "Mendukung Ekonomi Lokal yang Berkelanjutan",
  },
  {
    url: "singkil.jpeg",
    title: "Prasasti Bersejarah",
    subtitle: "Jejak Peradaban Masa Lalu",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section id="beranda" className="relative h-screen overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image.url})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl mb-6 font-[var(--font-playfair)] text-balance">
            {heroImages[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance">{heroImages[currentSlide].subtitle}</p>
          <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={() => {
            const beritaSection = document.getElementById("berita");
            if (beritaSection) {
              beritaSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
>
  Jelajahi Desa Kami
</Button>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
