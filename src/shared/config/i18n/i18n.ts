import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enTranslation } from './languages/en.ts';
import { ruTranslation } from './languages/ru.ts';
import { LOCAL_STORAGE_LANGUAGE_KEY } from '@/shared/localStorage/languageKey.ts';

const resources = {
    en: {
        ...enTranslation,
    },
    ru: {
        ...ruTranslation,
    },
};

const lng : string | undefined = localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY)
    ? localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) as string
    : 'ru';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
