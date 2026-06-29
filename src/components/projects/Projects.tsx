import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { FolderIcon, ExternalLinkIcon, ArrowRightIcon } from "../common/Icons";
import { Section } from "../common/Section";
import { useProjectsStore } from "../../store/projectsStore";

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const { projects, fetchProjects, isLoading } = useProjectsStore();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const currentLang = (i18n.language || 'ru').startsWith('ru') ? 'ru' : 'en';

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <Section id="projects">
      <div className="mx-auto max-w-7xl px-6 md:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-500/5 text-brand-600 border border-brand-500/10 shadow-inner dark:from-brand-500/20 dark:to-brand-500/5 dark:text-brand-400">
                <FolderIcon size={24} />
              </div>
              <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">{t("projects.title")}</h2>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-sm md:text-base mt-2 ml-1">
              Explore some of my latest work and personal projects.
            </p>
          </div>
          
          {projects.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white bg-white dark:bg-zinc-900 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-brand-700 transition-all active:scale-95"
            >
              {showAll ? t("projects.btnSeeLess") : t("projects.btnSeeAll")}
              <ArrowRightIcon className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${showAll ? "-rotate-90" : ""}`} />
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-brand-500/30 border-t-brand-500 rounded-full animate-spin" />
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl glass-panel transition-all duration-500 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <img
                      src={project.image || "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=600&auto=format&fit=crop&q=60"}
                      alt={project.title[currentLang]}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                    {/* Badges overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-10">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white border border-white/10 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">
                      {project.title[currentLang]}
                    </h3>
                    <p className="mb-6 flex-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                      {project.description[currentLang]}
                    </p>
                    
                    {/* Footer and link button */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                      <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 tracking-wider uppercase">
                        View Project
                      </span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 text-zinc-600 transition-all hover:bg-brand-500 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-brand-500/30 active:scale-95 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-brand-500 dark:hover:text-white"
                        aria-label={`Open ${project.title[currentLang]}`}
                      >
                        <ExternalLinkIcon size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </Section>
  );
};

export default Projects;
