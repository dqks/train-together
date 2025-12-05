import { useTranslation } from 'react-i18next';
import { Button } from '../../../shared/ui/Button/Button.tsx';
import { classNames } from '../../../shared/lib/classNames/classNames.ts';

interface LangSwitherProps {
    className?: string;
}

export const LOCAL_STORAGE_LANG_KEY = 'language';

export const LangSwitcher = ({ className }: LangSwitherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const language = i18n.language === 'ru' ? 'en' : 'ru';
        i18n.changeLanguage(language);
        localStorage.setItem(LOCAL_STORAGE_LANG_KEY, language);
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleLanguage}
        >
            {t('Русский')}
        </Button>
    );
};
