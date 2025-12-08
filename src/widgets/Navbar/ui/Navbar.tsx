import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import cls from './Navbar.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { UserCard } from '../../../entities/User';
import { AppLink } from '../../../shared/ui/AppLink/AppLink';
import { AuthRoutePath } from '../../../shared/config/routeConfig/authRouteConfig';
import { LangSwitcher } from '../../../features/LangSwitcher';
import { RegistrationButton } from '../../../features/RegistrationButton';
import { CollapseButton } from './CollapseButton/CollapseButton.tsx';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuth, setIsAuth] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const collapseHandler = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Navbar, { [cls.collapsed]: isCollapsed }, [className])}>
            <div className={classNames(cls.content, {}, [])}>
                {
                    isAuth
                        ? (
                            <>
                                <div className={cls.collapseButtonWrapper}>
                                    <CollapseButton collapseHandler={collapseHandler} />
                                </div>
                                <UserCard />
                                <AppLink deleteUnderLine to={AuthRoutePath.exercises}>
                                    {t('Упражнения')}
                                </AppLink>
                                <AppLink deleteUnderLine to={AuthRoutePath.programs}>
                                    {t('Программы пользователей')}
                                </AppLink>
                                <AppLink deleteUnderLine to={AuthRoutePath.my_programs}>
                                    {t('Ваши программы')}
                                </AppLink>
                                <AppLink deleteUnderLine to="/">
                                    {t('Выйти')}
                                </AppLink>
                                <LangSwitcher />
                            </>
                        )
                        : (
                            <>
                                <RegistrationButton />
                                <AppLink deleteUnderLine to={AuthRoutePath.exercises}>
                                    {t('Упражнения')}
                                </AppLink>
                                <AppLink deleteUnderLine to={AuthRoutePath.programs}>
                                    {t('Программы пользователей')}
                                </AppLink>
                            </>
                        )
                }
            </div>
        </div>
    );
};
