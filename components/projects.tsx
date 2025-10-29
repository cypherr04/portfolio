"use client";

import { useLanguage } from "./language-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Project {
  title: string;
  descriptionEn: string;
  descriptionFr: string;
  link: string;
  tech: string[];
  image: string;
  external: boolean;
  wip?: boolean;
  private?: boolean;
}

interface ProjectCardProps {
  project: Project;
  t: (en: string, fr: string) => string;
}

export default function Projects() {
  const { t } = useLanguage();

  const projects = {
    NextJs: [
      {
        title: "Almindhar Blog Platform",
        descriptionEn:
          "Dynamic blog powered by Supabase with SEO optimization and mobile-first UX",
        descriptionFr:
          "Blog dynamique avec Supabase, optimisé SEO et UX mobile",
        link: "https://almindharbooking.com/blog",
        tech: ["TypeScript", "Next.js", "Supabase", "SEO", "Tailwind CSS"],
        image: "/thumbnails/img.png?height=200&width=400",
        external: true,
      },
      {
        title: "Help Center",
        descriptionEn:
          "Help center with real-time article uploads and structured navigation",
        descriptionFr:
          "Centre d'aide avec upload en temps réel et navigation structurée",
        link: "https://almindharbooking.com/help-center",
        tech: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS"],
        image: "/thumbnails/img_1.png?height=200&width=400",
        external: true,
      },
      {
        title: "Writer Dashboard",
        descriptionEn:
          "Full writing workspace with draft saving, chapter building, rich text editing, and publishing workflow.",
        descriptionFr:
          "Espace d'écriture complet avec sauvegarde des brouillons, chapitrage, éditeur enrichi et workflow de publication.",
        link: "/projects/writer-dashboard",
        tech: ["TypeScript", "Quill", "Next.js", "Supabase", "SEO"],
        image: "/img.png?height=200&width=400",
        wip: true,
        external: false,
        private: true,
      },
    ],
    javascript: [
      {
        title: "Bankist App",
        descriptionEn:
          "A modern banking application demo showcasing secure transactions and real-time balance updates. Features elegant UI and smooth animations.",
        descriptionFr:
          "Une démo d'application bancaire moderne avec transactions sécurisées et mises à jour en temps réel. Interface élégante et animations fluides.",
        link: "https://bankist-demo-nine.vercel.app/",
        tech: ["JavaScript", "CSS3", "HTML5", "Web APIs"],
        image: "/thumbnails/bankist.png",
        external: true,
      },
      {
        title: "Dice Rolling Game",
        descriptionEn:
          "An interactive two-player dice game with dynamic scoring and win conditions. Demonstrates DOM manipulation and event handling.",
        descriptionFr:
          "Un jeu de dés interactif pour deux joueurs avec score dynamique et conditions de victoire. Démontre la manipulation du DOM et la gestion des événements.",
        link: "https://dice-rolling-duel.vercel.app/",
        tech: ["JavaScript", "CSS3", "HTML5"],
        image: "/thumbnails/RealDiceGame.png",
        external: true,
      },
      {
        title: "Guessing Game",
        descriptionEn:
          "A number guessing game with score tracking and high score persistence. Features responsive design and intuitive user feedback.",
        descriptionFr:
          "Un jeu de devinettes avec suivi du score et persistance du meilleur score. Design responsive et retour utilisateur intuitif.",
        link: "https://guessing-game-seven-beta.vercel.app/",
        tech: ["JavaScript", "CSS3", "HTML5"],
        image: "/thumbnails/GuessingGame.png",
        external: true,
      },
    ],
  };

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {t("Projects", "Projets")}
      </h2>
      <div className="space-y-12">
        {Object.entries(projects).map(([category, categoryProjects]) => (
          <div key={category} className="space-y-6">
            <h3 className="text-2xl font-semibold capitalize mb-6">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProjects.map((project) => (
                <Link
                  key={project.title}
                  href={project.link}
                  target={project.external ? "_blank" : undefined}
                  rel={project.external ? "noopener noreferrer" : undefined}
                  className="block h-full hover:cursor-pointer"
                >
                  <ProjectCard project={project} t={t} />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, t }: Readonly<ProjectCardProps>) {
  return (
    <Card className="bg-[hsl(var(--secondary)_/_0.5)] border-[hsl(var(--border)_/_0.5)] overflow-hidden hover:shadow-[hsl(var(--primary)_/_0.1)] hover:shadow-lg transition-shadow h-full">
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
          <div className="flex gap-2">
            {project.wip && (
              <Badge
                variant="outline"
                className="bg-[hsl(var(--primary)_/_0.2)] text-[hsl(var(--primary-foreground))] border-[hsl(var(--primary)_/_0.3)]"
              >
                {t("WIP", "En cours")}
              </Badge>
            )}
            {project.private && (
              <Badge
                variant="outline"
                className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] border-[hsl(var(--border))]"
              >
                {t("Private", "Privé")}
              </Badge>
            )}
          </div>
        </div>
        <CardDescription className="text-[hsl(var(--muted-foreground))]">
          {t(project.descriptionEn, project.descriptionFr)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech: string, techIndex: number) => (
            <Badge
              key={`${project.title}-${tech}`}
              variant="secondary"
              className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
