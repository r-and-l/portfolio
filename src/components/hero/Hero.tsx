import React from "react";
import { useTranslation } from "react-i18next";
import { GithubIcon, TelegramIcon, LinkedinIcon, ArrowRightIcon, MailIcon } from "../common/Icons";
import { Section } from "../common/Section";
import { CONTACT_LINKS } from "../../constants/contacts";
import { Button } from "../ui/Button";

const socialLinks = [
  { href: CONTACT_LINKS.github, label: "GitHub", Icon: GithubIcon },
  { href: CONTACT_LINKS.telegram, label: "Telegram", Icon: TelegramIcon },
  { href: CONTACT_LINKS.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
];

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden bg-zinc-950 pt-16"
      topOffset={false}
      bottomPadding={false}
    >
      {/* Background Glowing Orbs */}
      <div className="glow-orb absolute top-1/4 -left-10 h-72 w-72 rounded-full bg-brand-500/20" />
      <div className="glow-orb absolute bottom-1/4 -right-10 h-80 w-80 rounded-full bg-blue-500/10" />

      {/* Grid Pattern Background */}
      <div className="grid-bg absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Text Content Column */}
          <div className="flex flex-col space-y-6 lg:col-span-7">
            {/* Status Badge */}
            <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">
                {t("hero.badge")}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:leading-tight">
              {t("hero.headingLine1")} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-500 via-violet-400 to-blue-400 bg-clip-text text-transparent font-black">
                {t("hero.headingLine2")}
              </span>{" "}
              {t("hero.headingLine3")} <span className="inline-block animate-bounce">👋</span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base text-zinc-400 md:text-lg">
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
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-400 transition-all hover:border-brand-500 hover:bg-brand-500/10 hover:text-brand-500"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* MacOS Code Editor Column */}
          <div className="lg:col-span-5">
            <div className="group relative rounded-2xl border border-zinc-800 bg-[#12121e]/90 shadow-2xl transition-all duration-500 hover:border-zinc-700 hover:shadow-brand-500/10 hover:-translate-y-1">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-xs font-mono text-zinc-500 select-none">
                  about-me.js
                </div>
                <div className="w-12" /> {/* Spacer */}
              </div>

              {/* Code Panel */}
              <div className="p-4 overflow-x-auto font-mono text-xs leading-relaxed text-zinc-300">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr>
                      <td className="w-8 select-none text-right pr-4 text-zinc-650">1</td>
                      <td>
                        <span className="text-pink-400">const</span>{" "}
                        <span className="text-blue-300">developer</span>{" "}
                        <span className="text-pink-400">=</span>{" "}
                        <span className="text-white">&#123;</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-8 select-none text-right pr-4 text-zinc-650">2</td>
                      <td className="pl-4">
                        <span className="text-blue-400">{t("hero.terminal.nameKey")}</span>
                        <span className="text-white">:</span>{" "}
                        <span className="text-emerald-400">"{t("hero.terminal.nameVal")}"</span>
                        <span className="text-white">,</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-8 select-none text-right pr-4 text-zinc-650">3</td>
                      <td className="pl-4">
                        <span className="text-blue-400">{t("hero.terminal.roleKey")}</span>
                        <span className="text-white">:</span>{" "}
                        <span className="text-emerald-400">"{t("hero.badge")}"</span>
                        <span className="text-white">,</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-8 select-none text-right pr-4 text-zinc-650">4</td>
                      <td className="pl-4">
                        <span className="text-blue-400">{t("hero.terminal.skillsKey")}</span>
                        <span className="text-white">:</span>{" "}
                        <span className="text-white">[</span>
                        <span className="text-emerald-400">"HTML"</span>
                        <span className="text-white">,</span>{" "}
                        <span className="text-emerald-400">"CSS"</span>
                        <span className="text-white">,</span>{" "}
                        <span className="text-emerald-400">"JavaScript"</span>
                        <span className="text-white">,</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-8 select-none text-right pr-4 text-zinc-650">5</td>
                      <td className="pl-12">
                        <span className="text-emerald-400">"React"</span>
                        <span className="text-white">],</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-8 select-none text-right pr-4 text-zinc-650">6</td>
                      <td className="pl-4">
                        <span className="text-blue-400">{t("hero.terminal.passionKey")}</span>
                        <span className="text-white">:</span>{" "}
                        <span className="text-emerald-400">"{t("hero.terminal.passionValLine1")}"</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-8 select-none text-right pr-4 text-zinc-650">7</td>
                      <td className="pl-16">
                        <span className="text-emerald-400">"{t("hero.terminal.passionValLine2")}"</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-8 select-none text-right pr-4 text-zinc-650">8</td>
                      <td>
                        <span className="text-white">&#125;;</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-8 select-none text-right pr-4 text-zinc-650">9</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td className="w-8 select-none text-right pr-4 text-zinc-650">10</td>
                      <td>
                        <span className="text-zinc-500">// {t("hero.terminal.sayHelloComment")}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-8 select-none text-right pr-4 text-zinc-650">11</td>
                      <td>
                        <span className="text-pink-400">function</span>{" "}
                        <span className="text-yellow-300">sayHello</span>
                        <span className="text-white">()</span>{" "}
                        <span className="text-white">&#123;</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-8 select-none text-right pr-4 text-zinc-650">12</td>
                      <td className="pl-4">
                        <span className="text-pink-400">return</span>{" "}
                        <span className="text-emerald-400">"{t("hero.terminal.sayHelloReturn")}"</span>
                        <span className="text-white">;</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-8 select-none text-right pr-4 text-zinc-650">13</td>
                      <td>
                        <span className="text-white">&#125;</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-8 select-none text-right pr-4 text-zinc-650">14</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td className="w-8 select-none text-right pr-4 text-zinc-650">15</td>
                      <td>
                        <span className="text-pink-400">export default</span>{" "}
                        <span className="text-blue-300">developer</span>
                        <span className="text-white">;</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Hero;
