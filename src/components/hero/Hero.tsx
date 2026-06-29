import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { GithubIcon, TelegramIcon, LinkedinIcon, ArrowRightIcon, MailIcon } from "../common/Icons";
import { Section } from "../common/Section";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { CodeEditor } from "./CodeEditor";

const iconMap: Record<string, React.FC<any>> = {
  github: GithubIcon,
  telegram: TelegramIcon,
  linkedin: LinkedinIcon,
  default: GithubIcon
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
};

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'ru' ? 'Ru' : 'En';
  
  const [settings, setSettings] = useState<any>(null);
  const [socials, setSocials] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/hero').then(r => r.json()).then(setSettings).catch(console.error);
    fetch('/api/socials').then(r => r.json()).then(setSocials).catch(console.error);
  }, []);

  return (
    <Section
      id="hero"
      className="bg-[oklch(0.66_0_0)] dark:bg-zinc-950 overflow-hidden"
      hScreen={true}
    >
      {/* Background Glowing Orbs */}
      <div className="glow-orb absolute top-1/4 -left-10 h-[500px] w-[500px] rounded-full bg-brand-500/20 mix-blend-screen" />
      <div className="glow-orb absolute bottom-1/4 -right-10 h-[600px] w-[600px] rounded-full bg-blue-500/10 mix-blend-screen" />

      {/* Grid Pattern Background */}
      <div className="grid-bg absolute inset-0 opacity-40 dark:opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 w-full z-10 pt-4 pb-8">
        <div className="grid items-center gap-4 md:grid-cols-12 md:gap-6 lg:gap-8">

          {/* Text Content Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-4 lg:space-y-6 md:col-span-7"
          >
            {/* Badge List */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {(settings?.badges || []).map((badgeText: string, index: number) => (
                <Badge key={index} text={badgeText} pulse={true} variant={index % 2 === 0 ? "brand" : "blue"} />
              ))}
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={itemVariants} className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white md:text-3xl lg:text-4xl xl:text-5xl lg:leading-tight">
              {settings ? settings[`heading1${lang}`] : t("hero.headingLine1")} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-500 via-violet-400 to-blue-400 bg-clip-text text-transparent font-black drop-shadow-sm">
                {settings ? settings[`heading2${lang}`] : t("hero.headingLine2")}
              </span>{" "}
              {settings ? settings[`heading3${lang}`] : t("hero.headingLine3")} <span className="inline-block animate-bounce origin-bottom">👋</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="max-w-xl text-base text-zinc-600 dark:text-zinc-400 lg:text-lg leading-relaxed">
              {settings ? settings[`desc${lang}`] : t("hero.description")}
            </motion.p>

            {/* CTA Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <Button
                href="#projects"
                variant="primary"
                icon={<ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                className="group shadow-lg shadow-brand-500/25"
              >
                {t("hero.ctaProjects")}
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                icon={<MailIcon className="h-4 w-4" />}
                className="backdrop-blur-md bg-white/50 dark:bg-zinc-900/50"
              >
                {t("hero.ctaContact")}
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-2">
              {socials.filter(s => s.isActive).map(({ platform, url, id }) => {
                const Icon = iconMap[platform.toLowerCase()] || iconMap.default;
                return (
                  <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm text-zinc-600 shadow-sm transition-all hover:scale-110 hover:border-brand-500 hover:bg-brand-500 hover:text-white hover:shadow-brand-500/50 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:border-brand-500 dark:hover:bg-brand-500 dark:hover:text-white"
                    aria-label={platform}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* MacOS Code Editor Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            className="md:col-span-5 transform scale-90 lg:scale-95 origin-right"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-brand-500 to-blue-500 opacity-20 blur-xl dark:opacity-30"></div>
              <CodeEditor />
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};

export default Hero;
