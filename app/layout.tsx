import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { cn } from '@/lib/utils'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin']
})

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   variable: '--font-serif'
// })

const merriweather = Merriweather({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '700']
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
          merriweather.variable,
          'relative flex min-h-screen flex-col font-sans antialiased'
        )}
      >
        {/* <div className='bg-radial-light dark:bg-radial-dark absolute inset-0 -z-10 h-full w-full' /> */}
        <div className='bg-image'></div>

        <Providers>
          <Header />
          <main className='container mx-auto mt-48 flex-1 px-4 lg:px-8'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

// Do not import server components into client component
// you need to use children to wrap server components in client component
