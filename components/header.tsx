import React from 'react'
import Link from 'next/link'
import ThemeToggle from './theme-toggle'

export default function Header() {
  return (
    <header className='background fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            MG
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
            <Link href={'/contacts'}>Contacts</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
