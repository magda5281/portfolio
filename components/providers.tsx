'use client'

import React from 'react'
import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'
export default function providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
      <ToasterProvider />
    </ThemeProvider>
  )
}
// enableSystem enables themeProvider to read user preferences from their system
//attribute class means that theme provider will  set the class  on html tag for  dark variants
//using class instead of data ties it to tailwind which comes with class support for dark and light theme

function ToasterProvider() {
  const { resolvedTheme } = useTheme()
  return (
    <Toaster
      position='top-right'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      richColors
    />
  )
}
