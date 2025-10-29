"use client"

import { useLanguage } from "./language-provider"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-[hsl(var(--border)_/_0.3)] mt-12">
      <div className="text-center text-[hsl(var(--foreground)_/_0.6)] text-sm">
        <p>
          &copy; {currentYear} Seyfeddin BENSASSI. {t("All rights reserved.", "Tous droits réservés.")}
        </p>
        <p className="mt-2">{t("Built with Next.js and Tailwind CSS", "Construit avec Next.js et Tailwind CSS")}</p>
      </div>
    </footer>
  )
}

