import React from 'react'
import Link from 'next/link'
import ThemeToggle from './theme-toggle'
import Image from 'next/image'
import logo from '@/public/images/logo.webp'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-5xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-3xl font-bold'>
            <Image
              src={logo}
              alt='herDevlab logo'
              width={50}
              height={50}
              className='flex-1 rounded-lg object-cover grayscale'
              priority
            />
          </Link>
        </div>
        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground'>
          <li className='transition-colors hover:text-foreground'>
            <Link href={'/posts'}>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href={'/projects'}>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
