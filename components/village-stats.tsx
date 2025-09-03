"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatItemProps {
  value: number
  label: string
  suffix?: string
}

function StatItem({ value, label, suffix = "" }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <Card className="text-center">
      <CardContent className="p-6">
        <div className="text-4xl md:text-5xl font-bold text-accent mb-2 font-[var(--font-playfair)]">
          {displayValue.toLocaleString("id-ID")}
          {suffix}
        </div>
        <div className="text-muted-foreground text-lg">{label}</div>
      </CardContent>
    </Card>
  )
}

export function VillageStats() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
            Data Desa Ciawijapura
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Statistik terkini mengenai kependudukan dan wilayah Desa Ciawijapura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem value={4416} label="Penduduk" />
          <StatItem value={1462} label="Kepala Keluarga" />
          <StatItem value={2155} label="Luas Wilayah" suffix=" Ha" />
        </div>
      </div>
    </section>
  )
}
