import React from "react";
import { useTranslation } from "react-i18next";

export const CodeEditor: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="hidden md:block md:col-span-5">
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
                <td className="w-8 select-none text-right pr-4 text-zinc-500">1</td>
                <td>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-blue-300">developer</span>{" "}
                  <span className="text-pink-400">=</span>{" "}
                  <span className="text-white">&#123;</span>
                </td>
              </tr>
              <tr>
                <td className="w-8 select-none text-right pr-4 text-zinc-500">2</td>
                <td className="pl-4">
                  <span className="text-blue-400">{t("hero.terminal.nameKey")}</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-emerald-400">"{t("hero.terminal.nameVal")}"</span>
                  <span className="text-white">,</span>
                </td>
              </tr>
              <tr>
                <td className="w-8 select-none text-right pr-4 text-zinc-500">3</td>
                <td className="pl-4">
                  <span className="text-blue-400">{t("hero.terminal.roleKey")}</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-emerald-400">"Frontend Developer"</span>
                  <span className="text-white">,</span>
                </td>
              </tr>
              <tr>
                <td className="w-8 select-none text-right pr-4 text-zinc-500">4</td>
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
                <td className="w-8 select-none text-right pr-4 text-zinc-500">5</td>
                <td className="pl-12">
                  <span className="text-emerald-400">"React"</span>
                  <span className="text-white">],</span>
                </td>
              </tr>
              <tr>
                <td className="w-8 select-none text-right pr-4 text-zinc-500">6</td>
                <td className="pl-4">
                  <span className="text-blue-400">{t("hero.terminal.passionKey")}</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-emerald-400">"{t("hero.terminal.passionValLine1")}"</span>
                </td>
              </tr>
              <tr>
                <td className="w-8 select-none text-right pr-4 text-zinc-500">7</td>
                <td className="pl-16">
                  <span className="text-emerald-400">"{t("hero.terminal.passionValLine2")}"</span>
                </td>
              </tr>
              <tr>
                <td className="w-8 select-none text-right pr-4 text-zinc-500">8</td>
                <td>
                  <span className="text-white">&#125;;</span>
                </td>
              </tr>
              <tr>
                <td className="w-8 select-none text-right pr-4 text-zinc-500">9</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td className="w-8 select-none text-right pr-4 text-zinc-500">10</td>
                <td>
                  <span className="text-zinc-500">// {t("hero.terminal.sayHelloComment")}</span>
                </td>
              </tr>
              <tr>
                <td className="w-8 select-none text-right pr-4 text-zinc-500">11</td>
                <td>
                  <span className="text-pink-400">function</span>{" "}
                  <span className="text-yellow-300">sayHello</span>
                  <span className="text-white">()</span>{" "}
                  <span className="text-white">&#123;</span>
                </td>
              </tr>
              <tr>
                <td className="w-8 select-none text-right pr-4 text-zinc-500">12</td>
                <td className="pl-4">
                  <span className="text-pink-400">return</span>{" "}
                  <span className="text-emerald-400">"{t("hero.terminal.sayHelloReturn")}"</span>
                  <span className="text-white">;</span>
                </td>
              </tr>
              <tr>
                <td className="w-8 select-none text-right pr-4 text-zinc-500">13</td>
                <td>
                  <span className="text-white">&#125;</span>
                </td>
              </tr>
              <tr>
                <td className="w-8 select-none text-right pr-4 text-zinc-500">14</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td className="w-8 select-none text-right pr-4 text-zinc-500">15</td>
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
  );
};
