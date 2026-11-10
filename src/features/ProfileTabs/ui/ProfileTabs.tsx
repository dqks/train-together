import { useTranslation } from 'react-i18next';
import { NavLink, useSearchParams } from 'react-router';
import cls from './ProfileTabs.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface ProfileTabsProps {
    className?: string;
}

type Tab = {
    name: string
    search: string
    content: string
}

const tabs : Tab[] = [
    {
        name: "overview",
        search: 'overview',
        content: "Общее",
    },
    {
        name: "programs",
        search: 'programs',
        content: "Программы",
    },
    {
        name: "ratings",
        search: 'ratings',
        content: "Звезды",
    },
]

export const ProfileTabs = ({ className } : ProfileTabsProps) => {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const tabParam = searchParams.get('tab');


    return (
        <div className={classNames(cls.ProfileTabs, {}, [className])}>
            {
                tabs.map((tab) => (
                    <NavLink
                        key={tab.name}
                        className={tabParam === tab.name ? cls.tabActive : cls.tab}
                        to={{
                            search: '?tab=' + tab.search,
                        }}
                    >
                        {t(tab.content)}
                    </NavLink>
                ))
            }
        </div>
    );
};
