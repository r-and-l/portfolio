import React from "react";
import { useTranslation } from "react-i18next";
import { GithubIcon, TelegramIcon, LinkedinIcon, ArrowRightIcon, MailIcon } from "../common/Icons";
import { Section } from "../common/Section";
import { CONTACT_LINKS } from "../../constants/contacts";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { CodeEditor } from "./CodeEditor";


const socialLinks = [
  { href: CONTACT_LINKS.github, label: "GitHub", Icon: GithubIcon },
  { href: CONTACT_LINKS.telegram, label: "Telegram", Icon: TelegramIcon },
  { href: CONTACT_LINKS.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
];

type BadgeItem = {
  text: string;
  pulse?: boolean;
  variant?: "brand" | "blue" | "zinc" | "violet";
};

const badges: BadgeItem[] = [
  { text: "Frontend Developer", pulse: true },
  { text: "Junior DevOps", pulse: true, variant: "brand" },
  { text: "Junior Python", pulse: true, variant: "blue" }
];

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="hero"
      className="bg-[oklch(0.66_0_0)] dark:bg-zinc-950"
      hScreen={true}
    >
      {/* Background Glowing Orbs */}
      <div className="glow-orb absolute top-1/4 -left-10 h-72 w-72 rounded-full bg-brand-500/20" />
      <div className="glow-orb absolute bottom-1/4 -right-10 h-80 w-80 rounded-full bg-blue-500/10" />

      {/* Grid Pattern Background */}
      <div className="grid-bg absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 w-full">
        <div className="grid items-center gap-6 md:grid-cols-12 md:gap-8 lg:gap-12">

          {/* Text Content Column */}
            <div className="flex flex-col space-y-4 lg:space-y-6 md:col-span-7">
            {/* Badge List */}
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <Badge key={index} text={badge.text} pulse={badge.pulse} variant={badge.variant} />
              ))}
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white md:text-4xl lg:text-5xl xl:text-6xl lg:leading-tight">
              {t("hero.headingLine1")} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-500 via-violet-400 to-blue-400 bg-clip-text text-transparent font-black">
                {t("hero.headingLine2")}
              </span>{" "}
              {t("hero.headingLine3")} <span className="inline-block animate-bounce">👋</span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base text-zinc-800 dark:text-zinc-400 lg:text-lg">
              {t("hero.description")}
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                href="#projects"
                variant="primary"
                icon={<ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
                className="group"
              >
                {t("hero.ctaProjects")}
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                icon={<MailIcon className="h-4 w-4" />}
              >
                {t("hero.ctaContact")}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2 md:pt-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-all hover:border-brand-500 hover:bg-brand-500/10 hover:text-brand-500 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400 dark:hover:border-brand-500 dark:hover:bg-brand-500/10 dark:hover:text-brand-500"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* MacOS Code Editor Column */}
          <CodeEditor />

        </div>
      </div>
    </Section>
  );
};

export default Hero;
