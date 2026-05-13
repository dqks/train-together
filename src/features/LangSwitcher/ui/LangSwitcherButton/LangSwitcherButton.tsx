// Импорты всех нужных модулей, функций и компонентов
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { LOCAL_STORAGE_LANGUAGE_KEY } from '@/shared/const/languageKey.ts';
import World from '@/shared/assets/icons/world.svg?react';

// Типизация интерфейса для компонента
interface LangSwitcherProps {
    className?: string;
}

// Создание константы для ключа
// В локальном хранилище браузера

export const LangSwitcherButton = ({ className }: LangSwitcherProps) => {
    // Вызов функции и получение результата для смены языка
    // И получение текущего языка приложения
    const { i18n } = useTranslation();

    // Функция-обработчик на клик кнопки
    const toggleLanguage = () => {
        const language = i18n.language === 'ru' ? 'en' : 'ru';
        i18n.changeLanguage(language);
        localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language);
    };

    // Вывод разметки
    return (
        <Button
            className={className}
            theme={ThemeButton.GHOST}
            isIcon
            onClick={toggleLanguage}
            type="button"
        >
            <World />
        </Button>
    );
};
