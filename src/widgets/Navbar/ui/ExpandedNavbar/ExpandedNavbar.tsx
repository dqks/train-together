import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ExpandedNavbar.module.scss';
import UserSvg from '@/shared/assets/icons/user.svg?react';
import Barbell from '@/shared/assets/icons/barbell.svg?react';
import Programs from '@/shared/assets/icons/list.svg?react';
import FavouritePrograms from '@/shared/assets/icons/star.svg?react';
import MyPrograms from '@/shared/assets/icons/book.svg?react';
import MyExercises from '@/shared/assets/icons/filePlus.svg?react';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { LangSwitcherButton } from '@/features/LangSwitcher';
import type { NavbarProps } from '../../types/navbarProps.ts';
import { ExpandedItem } from '@/widgets/Navbar/ui/ExpandedNavbar/ExpandedItem/ExpandedItem.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

export const ExpandedNavbar = memo(({
    className,
    // openHandler,
    logoutHandler,
} : NavbarProps) => {
    const { t } = useTranslation();
    // const userNickname = useSelector(getUserNickname);
    return (
        <div className={classNames(
            cls.ExpandedNavbar,
            {},
            [className],
        )}
        >
            <p className={cls.sidebarLogo}>TrainTogether</p>
            <ExpandedItem
                to={`${AuthRoutePath.profile}tab=overview`}
                title={t('Профиль')}
                icon={<UserSvg />}
            />
            <ExpandedItem
                to={AuthRoutePath.exercises}
                title={t('Упражнения')}
                icon={<Barbell />}
            />
            <ExpandedItem
                to={AuthRoutePath.programs}
                title={t('Программы пользователей')}
                icon={<Programs />}
            />
            <ExpandedItem
                to={AuthRoutePath.favourite_programs}
                title={t('Избранные программы')} //
                icon={<FavouritePrograms />}
            />
            <ExpandedItem
                to={AuthRoutePath.my_programs}
                title={t('Ваши программы')}
                icon={<MyPrograms />}
            />
            <ExpandedItem
                to={AuthRoutePath.my_exercises}
                title={t('Ваши упражнения')} //
                icon={<MyExercises />}
            />
            <Button onClick={logoutHandler} type="button">{t('Выйти')}</Button>
            <LangSwitcherButton />

        </div>
    );
});
