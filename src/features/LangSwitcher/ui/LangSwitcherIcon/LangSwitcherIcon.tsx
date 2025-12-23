import { useTranslation } from 'react-i18next';
import Language from '@/shared/assets/icons/world.svg?react';
import cls from './LangSwitcherIcon.module.scss';
import { LOCAL_STORAGE_LANGUAGE_KEY } from '@/shared/localStorage/languageKey.ts';

export const LangSwitcherIcon = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const language = i18n.language === 'ru' ? 'en' : 'ru';
        i18n.changeLanguage(language);
        localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language);
    };

    return (
        <div className={cls.LangSwitcherIcon}>
            <Language
                stroke="white"
                width={35}
                strokeWidth={2}
                onClick={toggleLanguage}
            />
        </div>
    );
};
