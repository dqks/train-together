import { useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import cls from './ProgramCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import Picture from '../../../../shared/assets/icons/picture.svg?react';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { serverUrl } from '@/shared/const/serverUrl.ts';

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
        <div
            onClick={clickHandler}
            className={classNames(cls.ProgramCard, {}, [className])}
        >
            {
                imageUrl
                    ? <img className={cls.picture} src={serverUrl + imageUrl} alt="Изображение программы" />
                    : <Picture className={cls.picture} />
            }
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
