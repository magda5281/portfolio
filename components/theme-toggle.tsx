'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from './ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }
  return (
    <Button
      variant={'ghost'}
      className='group hover:bg-transparent'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-4 overflow-visible text-orange-300 group-hover:drop-shadow-[0_0_8px_currentColor] md:size-6' />
      ) : (
        <MoonIcon className='size-4 overflow-visible text-sky-950 group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.95)] md:size-6' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
