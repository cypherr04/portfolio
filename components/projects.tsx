"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: "Almindhar Blog Platform",
      descriptionEn: "Dynamic blog powered by Supabase with SEO optimization and mobile-first UX",
      descriptionFr: "Blog dynamique avec Supabase, optimisé SEO et UX mobile",
      link: "https://almindharbooking.com/blog",
      tech: ["Next.js", "Supabase", "TypeScript", "SEO"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Help Center",
      descriptionEn: "Help center with real-time article uploads and structured navigation",
      descriptionFr: "Centre d'aide avec upload en temps réel et navigation structurée",
      link: "https://almindharbooking.com/help-center",
      tech: ["React", "PostgreSQL", "Tailwind CSS"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Writer Dashboard",
      descriptionEn:
        "Full writing workspace with draft saving, chapter building, rich text editing, and publishing workflow.",
      descriptionFr:
        "Espace d'écriture complet avec sauvegarde des brouillons, chapitrage, éditeur enrichi et workflow de publication.",
      link: "#",
      tech: ["TypeScript", "Quill", "Next.js", "Supabase"],
      image: "/placeholder.svg?height=200&width=400",
      wip: true,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">{t("Projects", "Projets")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-[hsl(var(--secondary)_/_0.5)] border-[hsl(var(--border)_/_0.5)] overflow-hidden hover:shadow-[hsl(var(--primary)_/_0.1)] hover:shadow-lg transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                {project.wip && (
                  <Badge
                    variant="outline"
                    className="bg-[hsl(var(--primary)_/_0.2)] text-[hsl(var(--primary-foreground))] border-[hsl(var(--primary)_/_0.3)]"
                  >
                    {t("WIP", "En cours")}
                  </Badge>
                )}
              </div>
              <CardDescription className="text-[hsl(var(--muted-foreground))]">
                {t(project.descriptionEn, project.descriptionFr)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)_/_0.2)] w-full justify-between"
                asChild
                disabled={project.wip}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {t("View Project", "Voir le projet")}
                  <ExternalLink size={16} />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

