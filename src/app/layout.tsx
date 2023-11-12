import { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

import { Roboto } from 'next/font/google'

const oxanium = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Greenful',
  description: 'Greenful',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
          integrity='sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
          crossOrigin=''
        />
      </head>
      <body className={oxanium.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
