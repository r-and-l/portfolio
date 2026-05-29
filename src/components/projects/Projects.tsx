import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FolderIcon, ExternalLinkIcon, ArrowRightIcon } from "../common/Icons";
import { Section } from "../common/Section";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const initialProjects: Project[] = [
    {
      title: t("projects.todoTitle"),
      description: t("projects.todoDesc"),
      image: "/todo_app.png",
      tags: ["HTML", "CSS", "JS"],
      link: "https://github.com",
    },
    {
      title: t("projects.landingTitle"),
      description: t("projects.landingDesc"),
      image: "/landing_page.png",
      tags: ["HTML", "CSS"],
      link: "https://github.com",
    },
    {
      title: t("projects.ecommerceTitle"),
      description: t("projects.ecommerceDesc"),
      image: "/ecommerce.png",
      tags: ["React", "CSS"],
      link: "https://github.com",
    },
  ];

  const extraProjects: Project[] = [
    {
      title: t("projects.weatherTitle"),
      description: t("projects.weatherDesc"),
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&auto=format&fit=crop&q=60",
      tags: ["React", "API", "Tailwind"],
      link: "https://github.com",
    },
    {
      title: t("projects.recipeTitle"),
      description: t("projects.recipeDesc"),
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&auto=format&fit=crop&q=60",
      tags: ["React", "CSS"],
      link: "https://github.com",
    },
    {
      title: t("projects.blogTitle"),
      description: t("projects.blogDesc"),
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60",
      tags: ["Next.js", "Tailwind"],
      link: "https://github.com",
    },
  ];

  const visibleProjects = showAll ? [...initialProjects, ...extraProjects] : initialProjects;

  return (
    <Section id="projects">
      <div className="mx-auto max-w-7xl px-6 md:px-8 w-full">
        
        {/* Section Header */}
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors dark:bg-brand-500/10 dark:text-brand-500">
              <FolderIcon size={20} />
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">{t("projects.title")}</h2>
          </div>
          
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-500 transition-colors dark:text-brand-400 dark:hover:text-brand-300"
          >
            {showAll ? t("projects.btnSeeLess") : t("projects.btnSeeAll")}
            <ArrowRightIcon className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${showAll ? "rotate-90" : ""}`} />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, idx) => (
            <div
              key={`${project.title}-${idx}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:shadow-none"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (project.title === t("projects.todoTitle")) {
                      target.src = "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=600&auto=format&fit=crop&q=60";
                    } else if (project.title === t("projects.landingTitle")) {
                      target.src = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=60";
                    } else if (project.title === t("projects.ecommerceTitle")) {
                      target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=60";
                    }
                  }}
                />
                
                {/* Badges overlay */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-zinc-900/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm dark:bg-zinc-950/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">
                  {project.title}
                </h3>
                <p className="mb-6 flex-1 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Footer and link button */}
                <div className="flex items-center justify-end">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-50 text-zinc-600 transition-all hover:bg-brand-50 hover:text-brand-600 active:scale-95 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-brand-500/10 dark:hover:text-brand-400"
                    aria-label={`Open ${project.title}`}
                  >
                    <ExternalLinkIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default Projects;
