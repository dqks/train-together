import { useTranslation } from 'react-i18next';
import cls from './ProfileTabs.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames.ts';
import { AppLink, LinkColor } from '../../../shared/ui/AppLink/AppLink.tsx';

interface ProfileTabsProps {
    className?: string;
}

export const ProfileTabs = ({ className } : ProfileTabsProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ProfileTabs, {}, [className])}>
            <AppLink
                linkColor={LinkColor.BLACK}
                to={{
                    search: '?tab=overview',
                }}
            >
                {t('Общее')}
            </AppLink>
            <AppLink
                linkColor={LinkColor.BLACK}
                to={{
                    search: '?tab=programs',
                }}
            >
                {t('Программы')}
            </AppLink>
            <AppLink
                linkColor={LinkColor.BLACK}
                to={{
                    search: '?tab=ratings',
                }}
            >
                {t('Оценки')}
            </AppLink>
        </div>
    );
};
