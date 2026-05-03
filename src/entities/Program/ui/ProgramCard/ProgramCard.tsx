import { useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import cls from './ProgramCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { Badge, BadgeType } from '@/shared/ui/Badge/Badge.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

interface ProgramCardProps {
    id: number | undefined;
    className?: string;
    programName: string | undefined
    userName?: string;
    description: string | undefined;
    imageUrl: string | undefined;
    deleteCreator?: boolean;
    showRating?: boolean;
    // hasClickHandler?: boolean;
}

export const ProgramCard = (props : ProgramCardProps) => {
    const {
        className,
        deleteCreator = false,
        showRating,
        programName,
        userName,
        description,
        id,
        imageUrl,
        // hasClickHandler = true,
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const clickHandler = () => {
        navigate(`${AuthRoutePath.program_details}${id}`, { state: { from: location.state?.from } });
    };

    return (
        // <div
        //     onClick={clickHandler}
        //     className={classNames(cls.ProgramCard, {}, [className])}
        // >
        //     {
        //         imageUrl
        //             ? <img className={cls.picture} src={serverUrl + imageUrl} alt="Изображение программы" />
        //             : <Picture className={cls.picture} />
        //     }
        //     <div className={cls.infoWrapper}>
        //         {
        //             showRating
        //                 ? (
        //                     <div className={cls.titleWrapper}>
        //                         <h3>{programName}</h3>
        //                         <span>5 &#9733;</span>
        //                     </div>
        //                 )
        //                 : (
        //                     <h3>{programName}</h3>
        //                 )
        //         }
        //         <hr className={cls.hr} />
        //         <p
        //             className={classNames('', { [cls.deleteCreator]: deleteCreator }, [])}
        //         >
        //             {t('От')}
        //             {' '}
        //             {userName}
        //         </p>
        //         <p>{description}</p>
        //     </div>
        // </div>
        <div className={classNames(cls.previewCard, {}, ['card', className])}>
            <img
                src={imageUrl}
                alt="Тренировка"
                className={classNames(cls.image, {}, ['card-image'])}
            />
            <div className="card-body">
                <div className={cls.meta}>
                    <Badge type={BadgeType.POPULAR} text="🔥 Популярное" />
                    <Badge type={BadgeType.DEFAULT} text="⚡ Средний" />
                    <div className="rating-small">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                            />
                        </svg>
                        <span>4.8</span>
                    </div>
                </div>
                <h4 className="card-title">Программа «Сила и мощь»</h4>
                <p className="card-subtitle">Автор: Алексей Петров</p>
                <p className="card-text">
                    Комплексная программа для развития силы и увеличения мышечной массы. Включает
                    базовые упражнения со штангой и гантелями.
                </p>
                <div className={cls.category}>💪 Силовая</div>
                <div className={cls.stats}>
                    <span className={cls.stat}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M6.5 6.5h11M6.5 17.5h11" />
                        </svg>
                        12 упражнений
                    </span>
                </div>
                <Button
                    className={cls.subscribeButton}
                    type="button"
                >
                    {t('Подписаться')}
                </Button>
                {/* <button className="btn btn-primary subscribe-btn"> */}
                {/*    <svg */}
                {/*        xmlns="http://www.w3.org/2000/svg" */}
                {/*        width="16" */}
                {/*        height="16" */}
                {/*        viewBox="0 0 24 24" */}
                {/*        fill="none" */}
                {/*        stroke="currentColor" */}
                {/*        strokeWidth="2" */}
                {/*    > */}
                {/*        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /> */}
                {/*    </svg> */}
                {/*    Подписаться */}
                {/* </button> */}
            </div>
        </div>
    );
};
