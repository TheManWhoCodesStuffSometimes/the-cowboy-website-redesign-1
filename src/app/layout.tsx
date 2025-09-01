// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Cowboy Saloon & Dance Hall - Laramie, Wyoming',
  description: 'Laramie\'s legendary good-time headquarters. Live music, dancing, and cold drinks. Wednesday-Saturday, 5:30 PM - 2 AM. Under new ownership!',
  keywords: 'cowboy saloon, laramie bar, live music, country western, dance hall, wyoming nightlife',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
