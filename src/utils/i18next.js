import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'ua',
        fallbackLng: 'ua',
        supportedLngs: ['ua', 'ru', 'en'],
        debug: false,
        detection: {
            order: ['localStorage', 'cookie'],
            caches: ['localStorage', 'cookie'],
        },
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/ua/translation.json'
        }
    });

export default i18n;