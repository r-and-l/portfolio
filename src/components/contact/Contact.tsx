import React from "react";
import { useTranslation } from "react-i18next";
import { MailIcon, TelegramIcon, GithubIcon, SendIcon } from "../common/Icons";
import Link from "../ui/Link";
import { useContactForm } from "../../hooks/useContactForm";
import { CONTACT_LINKS } from "../../constants/contacts";
import { Button } from "../ui/Button";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const {
    form,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
    isDisabled
  } = useContactForm(true); // Передаем true для временного отключения формы

  return (
    <div className="w-full transition-colors duration-300">
      <div>
        {/* Banner Card Wrapper */}
        <div className="grid gap-10 rounded-3xl bg-brand-50/50 p-8 dark:bg-brand-950/10 md:p-12 lg:grid-cols-12">
          {/* Left Column: Contact info */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              {/* Header */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors dark:bg-brand-500/20 dark:text-brand-400">
                  <MailIcon size={20} />
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {t("contact.title")}
                </h2>
              </div>

              {/* Subheading */}
              <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                {t("contact.description")}
              </p>

              {/* Info Items */}
              <div className="space-y-4">
                {/* Email */}
                <Link
                  href={`mailto:${CONTACT_LINKS.email}`}
                  text={t("contact.link.mail")}
                  Icon={MailIcon}
                />

                {/* Telegram */}
                <Link
                  href={CONTACT_LINKS.telegram}
                  text={t("contact.link.telegram")}
                  Icon={TelegramIcon}
                />

                {/* Github */}
                <Link
                  href={CONTACT_LINKS.github}
                  text={t("contact.link.github")}
                  Icon={GithubIcon}
                />
              </div>
            </div>

            <div className="hidden lg:block text-xs text-zinc-400 dark:text-zinc-500">
              {t("contact.responseTime")}
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Disabled form notice */}
              {isDisabled && (
                <div className="rounded-xl border border-amber-200/50 bg-amber-50/40 p-4 text-xs font-semibold leading-relaxed text-amber-800 dark:border-amber-900/30 dark:bg-amber-950/10 dark:text-amber-400 animate-slideUp">
                  ⚠️ {t("contact.disabledNotice")}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Name field */}
                <div className="flex flex-col space-y-1.5">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    disabled={isDisabled}
                    placeholder={t("contact.namePlaceholder")}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all dark:bg-zinc-900/60 dark:text-white ${
                      isDisabled
                        ? "border-zinc-150 bg-zinc-50/30 text-zinc-400 dark:border-zinc-800/40 dark:bg-zinc-900/20 cursor-not-allowed opacity-75"
                        : errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                        : "border-zinc-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 dark:border-zinc-800"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 font-semibold">{errors.name}</span>
                  )}
                </div>

                {/* Email field */}
                <div className="flex flex-col space-y-1.5">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={isDisabled}
                    placeholder={t("contact.emailPlaceholder")}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all dark:bg-zinc-900/60 dark:text-white ${
                      isDisabled
                        ? "border-zinc-150 bg-zinc-50/30 text-zinc-400 dark:border-zinc-800/40 dark:bg-zinc-900/20 cursor-not-allowed opacity-75"
                        : errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                        : "border-zinc-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 dark:border-zinc-800"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 font-semibold">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Message field */}
              <div className="flex flex-col space-y-1.5">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  disabled={isDisabled}
                  placeholder={t("contact.messagePlaceholder")}
                  rows={4}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all dark:bg-zinc-900/60 dark:text-white ${
                    isDisabled
                      ? "border-zinc-150 bg-zinc-50/30 text-zinc-400 dark:border-zinc-800/40 dark:bg-zinc-900/20 cursor-not-allowed opacity-75"
                      : errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                      : "border-zinc-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 dark:border-zinc-800"
                  }`}
                />
                {errors.message && (
                  <span className="text-xs text-red-500 font-semibold">{errors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isDisabled || isSubmitting}
                className="w-full"
                icon={!isSubmitting && <SendIcon className="h-4 w-4" />}
              >
                {isSubmitting ? (
                  <>
                    <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>{t("contact.btnSubmitting")}</span>
                  </>
                ) : (
                  t("contact.btnSubmit")
                )}
              </Button>

              {/* Success Alert */}
              {isSuccess && (
                <div className="mt-3 rounded-xl bg-emerald-50 p-4 border border-emerald-250 text-sm font-semibold text-emerald-800 dark:bg-emerald-950/20 dark:border-emerald-800/30 dark:text-emerald-400 animate-slideUp">
                  {t("contact.successMsg")}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
