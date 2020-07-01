import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import translations from './translations'

i18next.use(LanguageDetector).init({
  fallbackLng: 'en-us',
  resources: translations,
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
      escapeValue: false, // not needed for react!!
  },
  react: {
      wait: true,
  },
  lowerCaseLng: true,
});

i18next.languages = ['zh-tw', 'en-us'];

export default i18next;
