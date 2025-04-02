"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const { t } = useLanguage()

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Saifeddin Bensassi</h1>
      <h2 className="text-2xl md:text-3xl text-[hsl(var(--primary))] font-semibold mb-8">
        {t("Full-Stack Developer", "Développeur Full-Stack")}
      </h2>
      <p className="text-lg md:text-xl max-w-2xl mb-12 text-[hsl(var(--foreground)_/_0.8)]">
        {t(
          "I build scalable, content-driven web platforms with a clean UI and strong backend.",
          "Je crée des plateformes web évolutives et centrées sur le contenu avec une interface soignée et un backend solide.",
        )}
      </p>
      <Button
        onClick={scrollToAbout}
        className="group bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)_/_0.9)] text-[hsl(var(--primary-foreground))]"
      >
        {t("Learn More", "En savoir plus")}
        <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
      </Button>
    </section>
  )
}

