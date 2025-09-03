"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation, Phone, Mail } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
            Lokasi & Peta Desa
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Temukan lokasi Desa Ciawijapura dan informasi kontak lengkap
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                  <MapPin className="h-6 w-6 text-accent" />
                  Peta Lokasi Desa Ciawijapura
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.210990061005!2d108.58106018236373!3d-6.8542686358159965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1ae72c48f521%3A0xbdb2b3c93628b845!2sCiawijapura%2C%20Kec.%20Susukan%20Lb.%2C%20Kabupaten%20Cirebon%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1756742945447!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                  <Navigation className="h-6 w-6 text-accent" />
                  Alamat Lengkap
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="font-semibold text-foreground">Desa Ciawijapura</div>
                  <div className="text-muted-foreground">
                    Kecamatan Susukanlebak
                    <br />
                    Kabupaten Cirebon
                    <br />
                    Jawa Barat, Indonesia
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    <strong>Jalur Akses:</strong>
                    <br />
                    Ruas Sindanglaut - Ciawigajah
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                  <Phone className="h-6 w-6 text-accent" />
                  Kontak Desa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-accent" />
                    <div>
                      <div className="font-medium text-foreground">Kantor Desa</div>
                      <div className="text-sm text-muted-foreground">Segera Tersedia</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-accent" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-sm text-muted-foreground">desaciawijapura001@gmail.com</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    <strong>Jam Pelayanan:</strong>
                    <br />
                    Senin - Jumat: 08:00 - 15:00 WIB
                    <br />
                    Sabtu: 08:00 - 12:00 WIB
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
