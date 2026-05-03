import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import cls from './Header.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { PublicRoutePath } from '@/shared/config/routeConfig/publicRouteConfig.tsx';
import { RegistrationButton } from '@/features/RegistrationButton';
import { LangSwitcherButton } from '@/features/LangSwitcher';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header className={cls.Header}>
            <div className={cls.headerInner}>
                <AppLink to={PublicRoutePath.landing}>
                    <span className={cls.headerLogo}>TrainTogether</span>
                </AppLink>
                <div className={cls.headerActions}>
                    <LangSwitcherButton />
                    <Link to={PublicRoutePath.login}>
                        <Button
                            theme={ThemeButton.OUTLINE}
                            type="button"
                        >
                            {t('Войти')}
                        </Button>
                    </Link>
                    <RegistrationButton />
                </div>
                {/* <button className={cls.menuToggle} id="menuToggle" aria-label="Меню"> */}
                {/*    <svg */}
                {/*        xmlns="http://www.w3.org/2000/svg" */}
                {/*        width="24" */}
                {/*        height="24" */}
                {/*        viewBox="0 0 24 24" */}
                {/*        fill="none" */}
                {/*        stroke="currentColor" */}
                {/*        strokeWidth="2" */}
                {/*    > */}
                {/*        <line x1="3" y1="12" x2="21" y2="12" /> */}
                {/*        <line x1="3" y1="6" x2="21" y2="6" /> */}
                {/*        <line x1="3" y1="18" x2="21" y2="18" /> */}
                {/*    </svg> */}
                {/* </button> */}
            </div>
        </header>
    );
};
