import { useNavigate } from 'react-router';
import cls from './ProgramCard.module.scss';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import Picture from '../../../../shared/assets/icons/picture.svg?react';
import { AuthRoutePath } from '../../../../shared/config/routeConfig/authRouteConfig';

interface ProgramCardProps {
    className?: string;
    // programName?: string
    // userName?: string;
    // description?: string;
    // image?: string;
    deleteCreator?: boolean;
    showRating?: boolean;
}

export const ProgramCard = ({
    className,
    deleteCreator = false,
    showRating,
} : ProgramCardProps) => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`${AuthRoutePath.program_details}23`);
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
                                <h3>Название</h3>
                                <span>5 &#9733;</span>
                            </div>
                        )
                        : (
                            <h3>Название</h3>
                        )
                }
                <hr className={cls.hr} />
                <p className={classNames('', { [cls.deleteCreator]: deleteCreator }, [])}>
                    От Username
                </p>
                <p>Описание</p>
            </div>
        </div>
    );
};
