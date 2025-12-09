import { useTranslation } from 'react-i18next';
import Language from '@/shared/assets/icons/world.svg?react';
import cls from './LangSwitcherIcon.module.scss';

// interface LangSwitcherIconProps {
//     className?: string;
// }

export const LOCAL_STORAGE_LANG_KEY = 'language';

export const LangSwitcherIcon = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const language = i18n.language === 'ru' ? 'en' : 'ru';
        i18n.changeLanguage(language);
        localStorage.setItem(LOCAL_STORAGE_LANG_KEY, language);
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
