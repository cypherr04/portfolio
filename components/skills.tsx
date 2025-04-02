"use client"

import { useLanguage } from "./language-provider"

export default function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("Programming", "Programmation"),
      skills: ["TypeScript", "JavaScript", "Python", "C", "C++"],
    },
    {
      title: "Stack",
      skills: ["Next.js", "Supabase", "PostgreSQL"],
    },
    {
      title: t("Tools", "Outils"),
      skills: ["Git", "TIA Portal", "Figma", "Quill", "Markdown"],
    },
    {
      title: t("Languages", "Langues"),
      skills: [
        t("Arabic (native)", "Arabe (natif)"),
        t("English (C1)", "Anglais (C1)"),
        t("French (fluent)", "Français (courant)"),
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">{t("Skills", "Compétences")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-[hsl(var(--secondary)_/_0.5)] rounded-xl p-6 shadow-lg border border-[hsl(var(--border)_/_0.5)]"
          >
            <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--primary))]">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center">
                  <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mr-3"></div>
                  <span className="text-[hsl(var(--foreground)_/_0.9)]">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

