import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LOCAL_STORAGE_LANGUAGE_KEY } from '@/shared/const/languageKey.ts';
import HttpBackend from 'i18next-http-backend';


const lng : string | undefined = localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY)
    ? localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) as string
    : 'ru';

i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        lng,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        ns: ['auth'], 
        defaultNS: 'auth',
    });

export default i18n;
