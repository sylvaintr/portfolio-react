import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    // debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['translation'],
    defaultNS: 'translation'
  });

// Synchronise l'attribut lang du document avec la langue active (SEO/accessibilité)
i18n.on('languageChanged', (lng: string) => {
  document.documentElement.lang = lng;
});
document.documentElement.lang = i18n.language;

export default i18n;