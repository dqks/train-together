import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import cls from './ExerciseCard.module.scss';
import { classNames } from '../../../../shared/lib/classNames/classNames.ts';
import Picture from '../../../../shared/assets/icons/picture.svg?react';
import { AuthRoutePath } from '../../../../shared/config/routeConfig/authRouteConfig.tsx';

interface ExerciseCardProps {
    className?: string;
    pictureUrl?: string;
    name?: string;
    description?: string;
}

export const ExerciseCard = (props : ExerciseCardProps) => {
    const {
        pictureUrl,
        description,
        className,
        name = 'Жим лежа в Смите',
    } = props;
    const { t } = useTranslation();

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`${AuthRoutePath.exercise_details}32`);
    };

    return (
        <div onClick={clickHandler} className={classNames(cls.ExerciseCard, {}, [className])}>
            <div className={cls.pictureWrapper}>
                <Picture height={250} />
            </div>
            <h2 className={cls.title}>{name}</h2>
            <p>
                {t('Грудь')}
                ,
                {' '}
                {t('Трицепс')}
                ,
                {' '}
                {t('Передняя дельта')}
            </p>
        </div>
    );
};
