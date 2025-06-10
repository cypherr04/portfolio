"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">{t("Contact", "Contact")}</h2>
      <div className="max-w-md mx-auto bg-[hsl(var(--secondary)_/_0.5)] rounded-xl p-8 shadow-lg border border-[hsl(var(--border)_/_0.5)]">
        <p className="text-[hsl(var(--foreground)_/_0.9)] mb-6 text-center">
          {t(
            "Feel free to reach out for collaborations or just a friendly hello!",
            "N'hésitez pas à me contacter pour des collaborations ou simplement pour dire bonjour !",
          )}
        </p>
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full justify-between hover:bg-[hsl(var(--secondary))] border-[hsl(var(--border)_/_0.5)]"
            asChild
          >
            <a href="https://github.com/cypherr04" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              <span>github.com/cypherr04</span>
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button
            variant="outline"
            className="w-full justify-between hover:bg-[hsl(var(--secondary))] border-[hsl(var(--border)_/_0.5)]"
            asChild
          >
            <a href="mailto:seyfeddinbensassi@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              <span>seyfeddinbensassi@gmail.com</span>
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

