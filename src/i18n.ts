import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { translations } from './locales/translations';
import type { TranslationSchema } from './locales/translations';

i18n
  .use(LanguageDetector) // Автоматически определяет язык пользователя
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: translations.ru },
      en: { translation: translations.en }
    },
    supportedLngs: ['en', 'ru'], // Поддерживаемые языки
    fallbackLng: 'en', // Язык по умолчанию, если перевод отсутствует
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage']
    },
    interpolation: { escapeValue: false }
  });

// Настройка автодополнения ключей перевода для react-i18next
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: TranslationSchema;
    };
  }
}

export default i18n;
