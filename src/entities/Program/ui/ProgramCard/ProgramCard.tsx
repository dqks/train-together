import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import cls from './ProgramCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import Picture from '../../../../shared/assets/icons/picture.svg?react';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';

interface ProgramCardProps {
    id: number;
    className?: string;
    programName: string
    userName?: string;
    description: string | null;
    // image?: string;
    deleteCreator?: boolean;
    showRating?: boolean;
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
    } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`${AuthRoutePath.program_details}${id}`);
    };

    return (
        <div
            onClick={clickHandler}
            className={classNames(cls.ProgramCard, {}, [className])}
        >
            <Picture className={cls.picture} />
            <div className={cls.infoWrapper}>
                {
                    showRating
                        ? (
                            <div className={cls.titleWrapper}>
                                <h3>{programName}</h3>
                                <span>5 &#9733;</span>
                            </div>
                        )
                        : (
                            <h3>{programName}</h3>
                        )
                }
                <hr className={cls.hr} />
                <p
                    className={classNames('', { [cls.deleteCreator]: deleteCreator }, [])}
                >
                    {t('От')}
                    {' '}
                    {userName}
                </p>
                <p>{description}</p>
            </div>
        </div>
    );
};
