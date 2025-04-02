"use client"

import { useLanguage } from "./language-provider"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("About Me", "À propos de moi")}</h2>
        <div className="bg-[hsl(var(--secondary)_/_0.5)] rounded-xl p-6 md:p-8 shadow-lg border border-[hsl(var(--border)_/_0.5)]">
          <p className="text-lg text-[hsl(var(--foreground)_/_0.9)] leading-relaxed">
            {t(
              "Software engineering student at EPI Digital School and developer at Almindhar. I specialize in TypeScript, Supabase, and scalable content systems. Passionate about performance, UX, and clean architecture.",
              "Étudiant en ingénierie logicielle à l'EPI Digital School et développeur chez Almindhar. Spécialisé en TypeScript, Supabase, et systèmes de contenu évolutifs. Passionné par la performance, l'UX et l'architecture claire.",
            )}
          </p>
        </div>
      </div>
    </section>
  )
}

