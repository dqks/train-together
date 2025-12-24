import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ExpandedNavbar.module.scss';
import { userActions, UserCard } from '@/entities/User';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { LangSwitcherButton } from '@/features/LangSwitcher';
import { RegistrationButton } from '@/features/RegistrationButton';
import { CollapseButton } from '../CollapseButton/CollapseButton';
import { getUserNickname } from '@/entities/User/model/selectors/getUserNickname/getUserNickname.ts';

interface ExpandedNavbarNavbarProps {
    className?: string;
    openHandler: () => void
}

export const ExpandedNavbar = ({ className, openHandler } : ExpandedNavbarNavbarProps) => {
    const { t } = useTranslation();
    const [isAuth] = useState(true);
    const userNickname = useSelector(getUserNickname);
    const dispatch = useDispatch();

    const onLogoutClick = () => {
        dispatch(userActions.logout());
    };

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
                            <UserCard name={userNickname} />
                            <AppLink deleteUnderLine to={AuthRoutePath.exercises}>
                                {t('Упражнения')}
                            </AppLink>
                            <AppLink deleteUnderLine to={AuthRoutePath.programs}>
                                {t('Программы пользователей')}
                            </AppLink>
                            <AppLink deleteUnderLine to={AuthRoutePath.my_programs}>
                                {t('Ваши программы')}
                            </AppLink>
                            <AppLink onClick={onLogoutClick} deleteUnderLine to="/">
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
