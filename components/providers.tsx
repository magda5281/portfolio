'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
export default function providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
// enableSystem enables themeProvider to read user preferences from their system
//attribute class means that theme provider will  set the class  on html tag for  dark variants
//using class instead of data ties it to tailwind which comes with class support for dark and light theme
