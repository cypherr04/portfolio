"use client";

import { useLanguage } from "./language-provider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("About Me", "À propos de moi")}
        </h2>
        <div className="bg-[hsl(var(--secondary)_/_0.5)] rounded-xl p-6 md:p-8 shadow-lg border border-[hsl(var(--border)_/_0.5)]">
          <p className="text-lg text-[hsl(var(--foreground)_/_0.9)] leading-relaxed">
            {t(
              "I am a web developer with a strong foundation in software engineering, specializing in building modern, responsive applications with a focus on performance and security. My background combines hands-on development experience with solid engineering studies, giving me both the technical expertise and the problem-solving mindset to contribute effectively to any development team. Beyond coding, I value continuous learning and enjoy tackling challenges that require creativity, precision, and strategic thinking",
              "Je suis un développeur web avec une solide formation en génie logiciel, spécialisé dans la création d'applications modernes et réactives avec un accent sur la performance et la sécurité. Mon parcours combine une expérience pratique en développement avec des études solides en ingénierie, me donnant à la fois l'expertise technique et l'état d'esprit de résolution de problèmes pour contribuer efficacement à toute équipe de développement. Au-delà du codage, je valorise l'apprentissage continu et j'aime relever des défis qui nécessitent créativité, précision et réflexion stratégique"
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
