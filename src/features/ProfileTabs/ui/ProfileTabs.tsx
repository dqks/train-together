import { useTranslation } from 'react-i18next';
import { NavLink, useSearchParams } from 'react-router';
import cls from './ProfileTabs.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface ProfileTabsProps {
    className?: string;
}

// TODO вынести в отдельный объект и мапить объект

export const ProfileTabs = ({ className } : ProfileTabsProps) => {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const tab = searchParams.get('tab');

    return (
        <div className={classNames(cls.ProfileTabs, {}, [className])}>
            <NavLink
                className={tab === 'overview' ? cls.tabActive : cls.tab}
                to={{
                    search: '?tab=overview',
                }}
            >
                {t('Общее')}
            </NavLink>
            <NavLink
                className={tab === 'programs' ? cls.tabActive : cls.tab}
                to={{
                    search: '?tab=programs',
                }}
            >
                {t('Программы')}
            </NavLink>
            <NavLink
                className={tab === 'ratings' ? cls.tabActive : cls.tab}
                to={{
                    search: '?tab=ratings',
                }}
            >
                {t('Звезды')}
            </NavLink>
        </div>
    );
};
