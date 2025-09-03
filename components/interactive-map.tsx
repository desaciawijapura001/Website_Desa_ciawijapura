"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Maximize2, Minimize2 } from "lucide-react"

interface MapLocation {
  id: string
  name: string
  category: string
  description: string
  coordinates: {
    lat: number
    lng: number
  }
  mapUrl: string
}

const mapLocations: MapLocation[] = [
  {
    id: "village-center",
    name: "Pusat Desa Ciawijapura",
    category: "Pemerintahan",
    description: "Kantor desa dan pusat administrasi",
    coordinates: { lat: -6.8542686, lng: 108.5810601 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.210990061005!2d108.58106018236373!3d-6.8542686358159965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1ae72c48f521%3A0xbdb2b3c93628b845!2sCiawijapura%2C%20Kec.%20Susukan%20Lb.%2C%20Kabupaten%20Cirebon%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1756742945447!5m2!1sid!2sid",
  },
  {
    id: "saung-tani",
    name: "Saung Tani Ciawijapura",
    category: "Wisata",
    description: "Destinasi wisata alam dan kuliner",
    coordinates: { lat: -6.8586952, lng: 108.5889512 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.265948270098!2d108.58895129999996!3d-6.858695200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1b638146a0a3%3A0x97ef4aa9e5eeb3a0!2ssaung%20tani%20ciawijapura!5e0!3m2!1sid!2sid!4v1756746966192!5m2!1sid!2sid",
  },
  {
    id: "gunung-singkil",
    name: "Gunung Singkil - Situs Chinese Cemetery",
    category: "Sejarah",
    description: "Situs bersejarah dengan prasasti Dinasti Qing",
    coordinates: { lat: -6.8616886, lng: 108.594304 },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.241049353713!2d108.59430407403471!3d-6.861688667130721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1ac3ab1f4049%3A0x55770e11dce8e3f2!2sGunung%20Singkil%2C%20Situs%20Chinese%20Cemetery!5e0!3m2!1sid!2sid!4v1756742969623!5m2!1sid!2sid",
  },
]

export function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation>(mapLocations[0])
  const [isFullscreen, setIsFullscreen] = useState(false)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Pemerintahan":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Wisata":
        return "bg-green-100 text-green-800 border-green-200"
      case "Sejarah":
        return "bg-amber-100 text-amber-800 border-amber-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
            Peta Interaktif Desa
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Jelajahi lokasi-lokasi penting di Desa Ciawijapura dengan peta interaktif
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Location Selector */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Pilih Lokasi:</h3>
            {mapLocations.map((location) => (
              <Card
                key={location.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedLocation.id === location.id ? "ring-2 ring-accent bg-accent/5" : "hover:bg-muted/50"
                }`}
                onClick={() => setSelectedLocation(location)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-sm leading-tight mb-1">{location.name}</h4>
                      <Badge variant="outline" className={`text-xs mb-2 ${getCategoryColor(location.category)}`}>
                        {location.category}
                      </Badge>
                      <p className="text-xs text-muted-foreground leading-relaxed">{location.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Display */}
          <div className="lg:col-span-3">
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                  <Navigation className="h-6 w-6 text-accent" />
                  {selectedLocation.name}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge className={getCategoryColor(selectedLocation.category)}>{selectedLocation.category}</Badge>
                  <Button variant="outline" size="sm" onClick={() => setIsFullscreen(!isFullscreen)}>
                    {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className={`w-full transition-all duration-300 ${isFullscreen ? "h-[600px]" : "h-96"}`}>
                  <iframe
                    src={selectedLocation.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-3">
                <strong className="text-foreground">{selectedLocation.name}:</strong> {selectedLocation.description}
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const { lat, lng } = selectedLocation.coordinates
                    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank")
                  }}
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Petunjuk Arah
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const { lat, lng } = selectedLocation.coordinates
                    window.open(`https://www.google.com/maps/@${lat},${lng},15z`, "_blank")
                  }}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Buka di Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
