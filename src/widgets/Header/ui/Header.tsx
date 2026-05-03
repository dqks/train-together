import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import cls from './Header.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { PublicRoutePath }
    from '@/shared/config/routeConfig/publicRouteConfig.tsx';
// import { LangSwitcherButton }
//     from '@/features/LangSwitcher';
import { RegistrationButton } from '@/features/RegistrationButton';

interface NavbarProps {
    className?: string;
}

export const Header = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onLoginClick = () => {
        navigate(PublicRoutePath.login);
    };

    return (
        // <div className={classNames(cls.Header, {}, [className])}>
        //     <div className={cls.item}>
        //         <LangSwitcherButton />
        //         <AppLink to={AuthRoutePath.exercises}>{t('Упражнения')}</AppLink>
        //         <AppLink to={AuthRoutePath.programs}>{t('Пользовательские тренировки')}</AppLink>
        //     </div>
        //     <div className={cls.item}>
        //         <AppLink to={PublicAppRoutes.LOGIN}>{t('Войти')}</AppLink>
        //     </div>
        // </div>
        <header className={cls.Header}>
            <div className={cls.headerInner}>
                <AppLink to={PublicRoutePath.landing}>
                    <span className={cls.headerLogo}>TrainTogether</span>
                </AppLink>
                <div className={cls.headerActions}>
                    <Button theme={ThemeButton.GHOST} isIcon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path
                                d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                            />
                        </svg>
                    </Button>
                    <Button onClick={onLoginClick} theme={ThemeButton.OUTLINE} type="button">Войти</Button>
                    <RegistrationButton />
                </div>

                <button className={cls.menuToggle} id="menuToggle" aria-label="Меню">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </div>
        </header>
    );
};
