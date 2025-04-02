"use client"

import type * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Define the Attribute type to match what next-themes expects
type Attribute = "class" | "data-theme" | "data-mode"

type ThemeProviderProps = {
  children: React.ReactNode
  attribute?: Attribute | Attribute[]
  defaultTheme?: string
  enableSystem?: boolean
  forcedTheme?: string
  disableTransitionOnChange?: boolean
  themes?: string[]
  storageKey?: string
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

