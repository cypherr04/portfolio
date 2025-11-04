"use client";

import { useLanguage } from "./language-provider";

// Logos are placed in public/logo/*.svg
const logos = [
  "typescript-svgrepo-com.svg",
  "javascript-155-svgrepo-com.svg",
  "react-svgrepo-com.svg",
  "nextjs-fill-svgrepo-com.svg",
  "nodejs01-svgrepo-com.svg",
  "postgresql-svgrepo-com.svg",
  "python-svgrepo-com.svg",
  "tailwindcss-svgrepo-com.svg",
  "figma-svgrepo-com.svg",
  "github-142-svgrepo-com.svg",
  "html-124-svgrepo-com.svg",
  "c-svgrepo-com.svg",
  "bootstrap-fill-svgrepo-com.svg",
  "npm-svgrepo-com.svg",
  "postman-svgrepo-com.svg",
  "aws-svgrepo-com.svg",
];

export default function Skills() {
  const { t } = useLanguage();

  // Duplicate logos array to create a seamless continuous scroll
  const trackLogos = [...logos, ...logos];

  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {t("My Toolbox", "Ma boîte à outils")}
      </h2>

      <div className="skill-slider relative">
        <div className="skill-track flex items-center">
          {trackLogos.map((name, idx) => (
            <div
              className="skill-item flex-shrink-0 flex items-center justify-center p-6"
              key={`${name}-${idx}`}
            >
              <img
                src={`/logo/${name}`}
                alt={name.replace(/[-.]/g, " ")}
                className="w-14 h-14 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
