import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ExpandedNavbar.module.scss';
import { UserCard } from '@/entities/User';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { CollapseButton } from '../CollapseButton/CollapseButton';
import { getUserNickname } from '@/entities/User/model/selectors/getUserNickname/getUserNickname.ts';
import { LangSwitcherButton } from '@/features/LangSwitcher';
import type { NavbarProps } from '../../types/navbarProps.ts';

export const ExpandedNavbar = memo(({
    className,
    openHandler,
    logoutHandler,
} : NavbarProps) => {
    const { t } = useTranslation();
    const userNickname = useSelector(getUserNickname);

    return (
        <div className={classNames(
            cls.ExpandedNavbar,
            {},
            [className],
        )}
        >

            <div className={cls.collapseButtonWrapper}>
                <CollapseButton
                    hasTooltip
                    tooltipText={t('Свернуть боковую панель')}
                    collapseHandler={openHandler}
                />
            </div>
            <UserCard name={userNickname} />
            <AppLink deleteUnderLine to={AuthRoutePath.exercises}>
                {t('Упражнения')}
            </AppLink>
            <AppLink deleteUnderLine to={AuthRoutePath.programs}>
                {t('Программы пользователей')}
            </AppLink>
            <AppLink deleteUnderLine to={AuthRoutePath.favourite_programs}>
                {t('Избранные программы')}
            </AppLink>
            <AppLink deleteUnderLine to={AuthRoutePath.my_programs}>
                {t('Ваши программы')}
            </AppLink>
            <AppLink deleteUnderLine to={AuthRoutePath.my_exercises}>
                {t('Ваши упражнения')}
            </AppLink>
            <AppLink onClick={logoutHandler} deleteUnderLine to="/">
                {t('Выйти')}
            </AppLink>
            <LangSwitcherButton />
        </div>
    );
});
