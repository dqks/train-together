import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';
import { ExpandedNavbar } from './ExpandedNavbar/ExpandedNavbar.tsx';
import { CollapsedNavbar } from './CollapsedNavbar/CollapsedNavbar.tsx';
import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className } : NavbarProps) => {
    const [isOpen, openHandler] = useOpen();
    return (
        <div className={classNames(cls.Navbar, { [cls.collapsed]: isOpen }, [className])}>
            {
                !isOpen
                    ? (<ExpandedNavbar openHandler={openHandler} />)
                    : (<CollapsedNavbar openHandler={openHandler} />)
            }
        </div>
    );
};
