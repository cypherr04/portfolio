"use client";

import { useLanguage } from "./language-provider";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.clientHeight : 0;
      const buffer = 24; // Same padding as navbar component
      
      // Calculate position accounting for navbar height and scroll position
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - buffer;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Sayfeddine BENSASSI
      </h1>
      <h2 className="text-2xl md:text-3xl text-[hsl(var(--primary))] font-semibold mb-8">
        {t("Full-Stack Developer", "Développeur Full-Stack")}
      </h2>
      <p className="text-lg md:text-xl max-w-2xl mb-6 text-[hsl(var(--foreground)_/_0.8)]">
        {t(
          "I build scalable, content-driven web platforms with a clean UI and strong backend.",
          "Je crée des plateformes web évolutives et centrées sur le contenu avec une interface soignée et un backend solide."
        )}
      </p>
      <p className="text-lg md:text-xl max-w-2xl mb-12 text-[hsl(var(--foreground)_/_0.6)] italic">
        {t(
          `"Learn from every mistake, master every challenge."`,
          "« Apprendre de chaque erreur, maîtriser chaque défi. »"
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
  );
}
