"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (en: string, fr: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"))
  }

  // Simple translation function
  const t = (en: string, fr: string) => {
    return language === "en" ? en : fr
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

