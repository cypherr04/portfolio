"use client";

import { useLanguage } from "./language-provider";
import { Button } from "@/components/ui/button";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("About Me", "À propos de moi")}
        </h2>

        <div className="bg-[hsl(var(--secondary)_/_0.5)] rounded-xl p-6 md:p-8 shadow-lg border border-[hsl(var(--border)_/_0.5)]">
          <div className="grid grid-cols-1 gap-6 items-start">
            <div>
              <p className="text-lg text-[hsl(var(--foreground)_/_0.95)] mb-4">
                {t(
                  "Full-Stack Web developer with a software engineering foundation, building fast, secure, and responsive applications.",
                  "Développeur web Full-Stack avec une solide formation en ingénierie logicielle, spécialisé dans la création d'applications performantes, sécurisées et réactives."
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button asChild className="w-full sm:w-auto">
                  <a
                    href="https://www.linkedin.com/in/seifeddine-bensassi-2834b2356/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 inline-block align-middle"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595z" />
                    </svg>
                    {t("LinkedIn", "LinkedIn")}
                  </a>
                </Button>

                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <a href="/Seyfeddin-BenSassi-EUROPASS-CV.pdf" download>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 inline-block align-middle"
                    >
                      <path d="M12 16.5c-.28 0-.53-.11-.71-.29l-5.5-5.5a1.003 1.003 0 0 1 1.42-1.42l3.29 3.29V4a1 1 0 1 1 2 0v8.58l3.29-3.29a1.003 1.003 0 0 1 1.42 1.42l-5.5 5.5c-.18.18-.43.29-.71.29z" />
                      <path d="M19 20H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z" />
                    </svg>
                    {t("Download CV", "Télécharger CV")}
                  </a>
                </Button>
              </div>

              {/* Contact infos copied from contact card */}
              <div className="mb-6">
                <div className="space-y-3 max-w-md">
                  <Button
                    variant="outline"
                    className="w-full justify hover:bg-[hsl(var(--secondary))] border-[hsl(var(--border)_/_0.5)]"
                    asChild
                  >
                    <a
                      href="https://github.com/cypherr04"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 mr-2 inline-block align-middle"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.174 22 16.426 22 12.012 22 6.484 17.523 2 12 2z" />
                      </svg>
                      <span className="mr-2">github.com/cypherr04</span>
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify hover:bg-[hsl(var(--secondary))] border-[hsl(var(--border)_/_0.5)]"
                    asChild
                  >
                    <a href="mailto:seyfeddinbensassi@gmail.com">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 mr-2 inline-block align-middle"
                      >
                        <path d="M2.01 6.8A2 2 0 0 1 4 5h16a2 2 0 0 1 1.99 1.8l-9.99 6.25L2.01 6.8zM2 8.25V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.25l-9.99 6.25L2 8.25z" />
                      </svg>
                      <span className="mr-2">seyfeddinbensassi@gmail.com</span>
                      <span className="sr-only">Email</span>
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3 text-[hsl(var(--muted-foreground))]">
                  {t(
                    "Companies I worked with",
                    "Entreprises avec lesquelles j'ai collaboré"
                  )}
                </h4>
                <div className="flex gap-4 items-center">
                  <img
                    src="/comp1.svg"
                    alt="Company 1"
                    className="w-24 h-12 object-contain rounded-md bg-[hsl(var(--border)_/_0.02)] company-logo"
                  />
                  <img
                    src="/comp2.svg"
                    alt="Company 2"
                    className="w-24 h-12 object-contain rounded-md bg-[hsl(var(--border)_/_0.02)] company-logo"
                  />
                  <div className="w-24 h-12 bg-[hsl(var(--border)_/_0.2)] rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
