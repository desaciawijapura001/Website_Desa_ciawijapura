"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, MapPin, Store, Building, History, Eye } from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  { href: "#beranda", label: "Beranda", icon: Home },
  { href: "#berita", label: "Berita", icon: Building },
  { href: "#sejarah", label: "Sejarah", icon: History },
  { href: "#visi-misi", label: "Visi & Misi", icon: Eye },
  { href: "#umkm", label: "UMKM", icon: Store },
  { href: "#wisata", label: "Wisata", icon: MapPin },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border/40" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick("#beranda")}
              className="text-xl text-foreground hover:text-accent transition-colors duration-200 font-[var(--font-playfair)]"
            >
              Desa Ciawijapura
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-200 px-3 py-2 rounded-md hover:bg-accent/10"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:text-accent hover:bg-accent/10 rounded-full p-2"
                  aria-label="Buka menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96 px-0">
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
                  <h2 className="text-xl text-foreground font-[var(--font-playfair)]">Menu Navigasi</h2>
                </div>

                <nav className="py-4">
                  <ul className="flex flex-col gap-1">
                    {navigationItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <li key={item.href}>
                          <button
                            onClick={() => handleNavClick(item.href)}
                            className="flex items-center gap-3 w-full text-left px-6 py-3 text-base font-medium text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent"
                          >
                            <Icon className="h-5 w-5 text-accent" />
                            <span>{item.label}</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </nav>

                <div className="mt-8 pt-6 border-t border-border px-6">
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p className="font-semibold text-foreground">Desa Ciawijapura</p>
                    <p>Kecamatan Susukanlebak</p>
                    <p>Kabupaten Cirebon, Jawa Barat</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
