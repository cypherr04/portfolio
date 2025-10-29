"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[hsl(var(--background)_/_0.8)] backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">Seyfeddin BENSASSI</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-[hsl(var(--foreground)_/_0.7)] hover:text-[hsl(var(--foreground))] transition-colors"
            >
              {t("About", "À propos")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-[hsl(var(--foreground)_/_0.7)] hover:text-[hsl(var(--foreground))] transition-colors"
            >
              {t("Projects", "Projets")}
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-[hsl(var(--foreground)_/_0.7)] hover:text-[hsl(var(--foreground))] transition-colors"
            >
              {t("Skills", "Compétences")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[hsl(var(--foreground)_/_0.7)] hover:text-[hsl(var(--foreground))] transition-colors"
            >
              {t("Contact", "Contact")}
            </button>
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="ml-4 font-medium border-[hsl(var(--border)_/_0.5)]"
            >
              {language === "en" ? "FR" : "EN"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="mr-4 font-medium border-[hsl(var(--border)_/_0.5)]"
            >
              {language === "en" ? "FR" : "EN"}
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[hsl(var(--foreground)_/_0.7)] hover:text-[hsl(var(--foreground))]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[hsl(var(--secondary)_/_0.8)] backdrop-blur-md py-4 px-2 rounded-b-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-[hsl(var(--foreground)_/_0.7)] hover:text-[hsl(var(--foreground))] transition-colors py-2"
              >
                {t("About", "À propos")}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-[hsl(var(--foreground)_/_0.7)] hover:text-[hsl(var(--foreground))] transition-colors py-2"
              >
                {t("Projects", "Projets")}
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-[hsl(var(--foreground)_/_0.7)] hover:text-[hsl(var(--foreground))] transition-colors py-2"
              >
                {t("Skills", "Compétences")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[hsl(var(--foreground)_/_0.7)] hover:text-[hsl(var(--foreground))] transition-colors py-2"
              >
                {t("Contact", "Contact")}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

