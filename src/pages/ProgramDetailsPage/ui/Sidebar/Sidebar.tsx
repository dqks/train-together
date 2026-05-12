import { useTranslation } from 'react-i18next';
import { Link, type Params } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import YellowStar from '@/shared/assets/icons/yellowStar.svg?react';
import Circle from '@/shared/assets/icons/circle.svg?react';
import { SubscribeProgram } from '@/features/SubscribeProgram';
import { getProgramsWord } from '../../lib/getProgramsWord/getProgramsWord';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import userPicture from '@/shared/assets/images/userPicture.jpg';
import { serverUrl } from '@/shared/const/serverUrl.ts';

interface SidebarProps {
    className?: string;
    params: Params<string>
    authorName: string | undefined;
    isSubscribed: boolean | undefined
    programsCount: number | undefined
    followsCount: number | undefined
    authorId: number | undefined
    authorImage: string | undefined
}

export const Sidebar = (props : SidebarProps) => {
    const { t } = useTranslation();
    const {
        className,
        params,
        isSubscribed,
        authorName,
        programsCount,
        followsCount,
        authorId,
        authorImage,
    } = props;

    const programCountText = getProgramsWord(programsCount);

    return (
        <aside className={classNames(cls.Sidebar, {}, [className])}>
            <div className={cls.subscribeCard}>
                <div className={cls.subscribeHeader}>
                    <div className={cls.ratingDisplay}>
                        <YellowStar className={cls.yellowStar} />
                        <span className={cls.ratingValue}>{followsCount}</span>
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
                            src={authorImage || userPicture}
                            alt={authorName}
                        />
                    </div>
                    <div className={cls.authorCardInfo}>
                        <span className={cls.authorCardName}>{authorName}</span>
                        <span className={cls.authorCardStats}>
                            {programsCount}
                            {' '}
                            {t(programCountText)}
                        </span>
                    </div>
                </div>
                <Button theme={ThemeButton.OUTLINE} className={cls.buttonBlock} type="button">
                    <Link to={{
                        pathname: AuthRoutePath.profile + authorId,
                        search: 'tab=overview',
                    }}
                    >
                        {t('Перейти в профиль')}
                    </Link>
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
