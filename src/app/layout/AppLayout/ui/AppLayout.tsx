// Импорты всех нужных модулей, функций и компонентов
import { Outlet } from 'react-router';
import { useState } from 'react';
import cls from './AppLayout.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { Navbar } from '@/widgets/Navbar';
import { BackButton } from '@/features/BackButton';

// Типизация интерфейса для шаблона
interface AppLayoutProps {
    className?: string;
}

// Типизация типа для объекта контекста
export type AppContextType = {
    setTitle: (title: string) => void
    setBackButton: (path: string) => void
    setShowTitle: (show: boolean) => void
}

export const AppLayout = ({ className }: AppLayoutProps) => {
    // Создание состояния для названия страницы
    const [title, setTitle] = useState('');

    // Создание состояния для пути кнопки "Назад" на странице
    const [backButton, setBackButton] = useState<string>('');

    const [showTitle, setShowTitle] = useState(true);

    const appContext : AppContextType = {
        setTitle,
        setBackButton,
        setShowTitle,
    };

    // Вывод разметки шаблона
    return (
        <div className={classNames(cls.AppLayout, {}, [className])}>
            <Navbar />
            <div className={cls.contentWrapper}>
                {backButton && <BackButton path={backButton} className={cls.backButton} />}
                {showTitle && <h1 className={cls.title}>{title}</h1>}

                {/* Передача функций для установки названия и кнопки "Назад " */}
                {/* Вместо Outlet подставляется контент страницы */}
                <Outlet context={appContext} />
            </div>
        </div>
    );
};
