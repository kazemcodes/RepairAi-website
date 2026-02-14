import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'RepairAI - AI-Powered Mobile Repair Assistant',
    template: '%s | RepairAI'
  },
  description: 'Free, open-source mobile repair assistant with AI-powered schematics, solutions, and chat support. Built for repair technicians by the community.',
  keywords: ['mobile repair', 'AI repair', 'phone repair', 'circuit diagrams', 'repair guides', 'open source', 'schematic viewer', 'iPhone repair', 'Samsung repair'],
  authors: [{ name: 'RepairAI Community' }],
  creator: 'RepairAI',
  publisher: 'RepairAI',
  metadataBase: new URL('https://repairai.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://repairai.vercel.app',
    siteName: 'RepairAI',
    title: 'RepairAI - AI-Powered Mobile Repair Assistant',
    description: 'Free, open-source mobile repair assistant with AI-powered schematics, solutions, and chat support.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RepairAI - AI-Powered Mobile Repair Assistant'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RepairAI - AI-Powered Mobile Repair Assistant',
    description: 'Free, open-source mobile repair assistant with AI-powered schematics, solutions, and chat support.',
    creator: '@repairai',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    languages: {
      'en': 'https://repairai.vercel.app',
      'fa': 'https://repairai.vercel.app/fa'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
