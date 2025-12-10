import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ExpandedNavbar.module.scss';
import { UserCard } from '@/entities/User';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { LangSwitcherButton } from '@/features/LangSwitcher';
import { RegistrationButton } from '@/features/RegistrationButton';
import { CollapseButton } from '../CollapseButton/CollapseButton';

interface ExpandedNavbarNavbarProps {
    className?: string;
    openHandler: () => void
}

export const ExpandedNavbar = ({ className, openHandler } : ExpandedNavbarNavbarProps) => {
    const [isAuth] = useState(true);
    const { t } = useTranslation();

    return (
        <div className={classNames(
            cls.ExpandedNavbar,
            {},
            [className],
        )}
        >
            {
                isAuth
                    ? (
                        <>
                            <div className={cls.collapseButtonWrapper}>
                                <CollapseButton
                                    hasTooltip
                                    tooltipText={t('Свернуть боковую панель')}
                                    collapseHandler={openHandler}
                                />
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
                            <LangSwitcherButton />
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
    );
};
