import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StructuredData from '@/components/StructuredData'
import ThemeScript from './theme-script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ankhbayr | Web & App Developer',
  description: 'Full-stack Web & App Developer specializing in React, Next.js, Node.js, and modern web technologies. Building high-performance applications with clean, scalable code.',
  keywords: ['Web Developer', 'App Developer', 'Full Stack', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Frontend', 'Backend', 'Ankhbayr'],
  authors: [{ name: 'Ankhbayr' }],
  creator: 'Ankhbayr',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ankhbayr.dev',
    title: 'Ankhbayr | Web & App Developer',
    description: 'Full-stack Web & App Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    siteName: 'Ankhbayr Portfolio',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Ankhbayr - Web & App Developer',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankhbayr | Web & App Developer',
    description: 'Full-stack Web & App Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // TODO: Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <div className="relative min-h-screen">
          {/* Animated background */}
          <div className="fixed inset-0 bg-gradient-to-b from-gray-50 to-white dark:bg-dark overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20" />
            <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-sky-400/20 dark:bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-400/20 dark:bg-neon-magenta/10 rounded-full blur-3xl animate-pulse-slow" />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}

