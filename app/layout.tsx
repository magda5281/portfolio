import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { cn } from '@/lib/utils'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin']
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'HerDevLab',
  description: 'Portfolio app to showcase skills applied in projects'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          'flex min-h-screen flex-col font-sans antialiased'
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

// Do not import server components into client component
// you need to use children to wrap server components in client component
