import type React from "react"
import type { Metadata } from "next"
import { ClientLayout } from "./ClientLayout"

export const metadata: Metadata = {
  title: "Desa Ciawijapura - Website Resmi",
  description: "Website resmi Desa Ciawijapura, Kecamatan Susukanlebak, Kabupaten Cirebon",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'