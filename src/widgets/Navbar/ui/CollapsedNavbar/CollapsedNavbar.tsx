import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CollapsedNavbar.module.scss';
import { CollapseButton } from '../CollapseButton/CollapseButton';
import Programs from '@/shared/assets/icons/list.svg?react';
import Logout from '@/shared/assets/icons/logout.svg?react';
import MyPrograms from '@/shared/assets/icons/star.svg?react';
import Barbell from '@/shared/assets/icons/barbell.svg?react';
import { NavIconItem } from '@/widgets/Navbar/ui/NavIconItem/NavIconItem.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { LangSwitcherIcon } from '@/features/LangSwitcher';
import { UserCollapsedCard } from '@/entities/User';

interface CollapsedNavbarProps {
    className?: string;
    openHandler: () => void
}

export const CollapsedNavbar = ({
    className,
    openHandler,
} : CollapsedNavbarProps) => (
    <div className={classNames(cls.CollapsedNavbar, {}, [className])}>
        <div>
            <CollapseButton
                hasTooltip={false}
                collapseHandler={openHandler}
            />
        </div>
        <UserCollapsedCard />
        <NavIconItem
            icon={<Barbell stroke="white" width={35} strokeWidth={2} />}
            to={AuthRoutePath.exercises}
        />
        <NavIconItem
            icon={<Programs stroke="white" width={35} strokeWidth={2} />}
            to={AuthRoutePath.programs}
        />
        <NavIconItem
            icon={<MyPrograms stroke="white" width={35} strokeWidth={2} />}
            to={AuthRoutePath.programs}
        />
        <NavIconItem
            icon={<Logout stroke="white" width={35} strokeWidth={2} />}
            to="/"
        />
        <LangSwitcherIcon />
    </div>
);
