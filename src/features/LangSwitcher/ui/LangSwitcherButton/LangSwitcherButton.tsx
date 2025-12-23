// Импорты всех нужных модулей, функций и компонентов
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { LOCAL_STORAGE_LANGUAGE_KEY } from '@/shared/localStorage/languageKey.ts';

// Типизация интерфейса для компонента
interface LangSwitcherProps {
    className?: string;
}

// Создание константы для ключа
// В локальном хранилище браузера

export const LangSwitcherButton = ({ className }: LangSwitcherProps) => {
    // Вызов функции и получение результата для смены языка
    // И получение текущего языка приложения
    const { t, i18n } = useTranslation();

    // Функция-обработчик на клик кнопки
    const toggleLanguage = () => {
        const language = i18n.language === 'ru' ? 'en' : 'ru';
        i18n.changeLanguage(language);
        localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language);
    };

    // Вывод разметки
    return (
        <Button
            type="button"
            className={classNames('', {}, [className])}
            onClick={toggleLanguage}
        >
            {t('Русский')}
        </Button>
    );
};
