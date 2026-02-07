import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationJA from './locales/ja/translation.json';
import translationEN from './locales/en/translation.json';
import translationKO from './locales/ko/translation.json';
import translationDE from './locales/de/translation.json';
import translationFR from './locales/fr/translation.json';
import translationIT from './locales/it/translation.json';

// the translations
const resources = {
    ja: {
        translation: translationJA
    },
    en: {
        translation: translationEN
    },
    ko: {
        translation: translationKO
    },
    de: {
        translation: translationDE
    },
    fr: {
        translation: translationFR
    },
    it: {
        translation: translationIT
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'en', // default language
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        detection: {
            order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie']
        }
    });

export default i18n;
