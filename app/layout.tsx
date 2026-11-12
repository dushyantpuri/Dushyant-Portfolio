import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { Inter } from 'next/font/google'

// Initialize fonts
const inter = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700','800'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Dushyant Puri – Product & Delivery Leader',
  description: 'Product & Delivery leader with 12+ years driving software, embedded, and IoT projects from problem to shipped outcome. Available for contract projects, fractional product leadership, and select full-time roles.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
