import { useTranslation } from 'react-i18next';
import type { Params } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import YellowStar from '@/shared/assets/icons/yellowStar.svg?react';
import Circle from '@/shared/assets/icons/circle.svg?react';
import { SubscribeProgram } from '@/features/SubscribeProgram';

interface SidebarProps {
    className?: string;
    params: Params<string>
    authorName: string | undefined;
    isSubscribed: boolean | undefined
    programsCount: number | undefined
}

export const Sidebar = (props : SidebarProps) => {
    const { t } = useTranslation();
    const {
        className, params, isSubscribed, authorName, programsCount,
    } = props;
    return (
        <aside className={classNames(cls.Sidebar, {}, [className])}>
            <div className={cls.subscribeCard}>
                <div className={cls.subscribeHeader}>
                    <div className={cls.ratingDisplay}>
                        <YellowStar className={cls.yellowStar} />
                        <span className={cls.ratingValue}>48</span>
                    </div>
                </div>
                <SubscribeProgram isSubscribed={isSubscribed} programId={Number(params.id)} />
                <p className={cls.subscribeNote}>
                    {t('Программа будет добавлена в ваш список избранных')}
                </p>
            </div>
            <div className={cls.authorCard}>
                <h3 className={cls.authorCardTitle}>{t('Об авторе')}</h3>
                <div className={cls.authorCardContent}>
                    <div className={cls.authorCardAvatar}>
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&amp;h=80&amp;fit=crop&amp;crop=face"
                            alt="Алексей Петров"
                        />
                    </div>
                    <div className={cls.authorCardInfo}>
                        <span className={cls.authorCardName}>{authorName}</span>
                        <span className={cls.authorCardStats}>
                            {programsCount}
                            {' '}
                            программ
                        </span>
                    </div>
                </div>
                <Button theme={ThemeButton.OUTLINE} className={cls.buttonBlock} type="button">
                    {t('Перейти в профиль')}
                </Button>
            </div>
            <div className={cls.tipsCard}>
                <h3 className={cls.tipsTitle}>
                    <Circle className={cls.tipsTitleSvg} />
                    {t('Рекомендации')}
                </h3>
                <ul className={cls.tipsList}>
                    <li>{t('Перед тренировкой обязательна разминка')}</li>
                    <li>{t('Соблюдайте правильную технику выполнения')}</li>
                    <li>{t('Ведите дневник тренировок')}</li>
                </ul>
            </div>
        </aside>
    );
};
