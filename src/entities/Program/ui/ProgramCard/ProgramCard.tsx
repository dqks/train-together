import { useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import cls from './ProgramCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { Badge, BadgeType } from '@/shared/ui/Badge/Badge.tsx';
import Star from '@/shared/assets/icons/star.svg?react';
import Shelf from '@/shared/assets/icons/shelf.svg?react';
import { serverUrl } from '@/shared/const/serverUrl.ts';

interface ProgramCardProps {
    id: number | undefined;
    className?: string;
    programName: string | undefined
    userName?: string;
    description: string | undefined;
    imageUrl: string | undefined;
    deleteCreator?: boolean;
    goal: string | undefined;
    difficulty: string | undefined;
    daysAmount: number | undefined;
}

export const ProgramCard = (props : ProgramCardProps) => {
    const {
        className,
        deleteCreator = false,
        programName,
        userName,
        description,
        id,
        imageUrl,
        goal,
        difficulty,
        daysAmount,
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const clickHandler = () => {
        navigate(`${AuthRoutePath.program_details}${id}`, { state: { from: location.state?.from } });
    };

    return (
        <div
            className={classNames(cls.previewCard, {}, ['card', className])}
        >
            <img
                src={serverUrl + imageUrl}
                alt={t('Программа')}
                className={classNames(cls.image, {}, ['card-image'])}
            />

            <div className="card-body" onClick={clickHandler}>
                <div className={cls.meta}>
                    {/* <Badge type={BadgeType.POPULAR} text="🔥 Популярное" /> */}
                    <Badge type={BadgeType.DEFAULT} text={difficulty} />
                    <div className="rating-small">
                        <Star />
                        <span>4.8</span>
                    </div>
                </div>
                <h4 className={classNames(cls.cardTitle, {}, ['card-title'])}>
                    {programName}
                </h4>
                {!deleteCreator && (
                    <p className="card-subtitle">
                        {t('Автор: ')}
                        {userName}
                    </p>
                )}
                <p className="card-text">
                    {description}
                </p>
                <div className={cls.category}>{goal}</div>
                <div className={cls.stats}>
                    <span className={cls.stat}>
                        <Shelf />
                        {daysAmount}
                        {' '}
                        {t('дня')}
                    </span>
                </div>
                {/* <Button */}
                {/*    className={cls.subscribeButton} */}
                {/*    type="button" */}
                {/* > */}
                {/*    {t('Подписаться')} */}
                {/* </Button> */}
            </div>
        </div>
    );
};
