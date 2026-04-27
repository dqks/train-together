import { useLocation, useNavigate } from 'react-router';
import i18n from 'i18next';
import cls from './ExerciseCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import Picture from '../../../../shared/assets/icons/picture.svg?react';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import type { Muscle } from '@/entities/Muscle/model/types/muscleSchema.ts';
import { serverUrl } from '@/shared/const/serverUrl.ts';

interface ExerciseCardProps {
    className?: string;
    exerciseId: number;
    imageUrl: string;
    name: string;
    muscles: Muscle[]
}

// Получать, пользовательское ли упражнение или нет будем из запроса API /exercises/:id

export const ExerciseCard = (props : ExerciseCardProps) => {
    const {
        // pictureUrl,
        muscles,
        className,
        name,
        exerciseId,
        imageUrl,
    } = props;

    const navigate = useNavigate();
    const location = useLocation();

    const clickHandler = () => {
        navigate(`${AuthRoutePath.exercise_details}${exerciseId}`, { state: { from: location.state?.from } });
    };

    let musclesMap: (string | undefined)[] = [];

    if (i18n.language === 'en') {
        musclesMap = muscles.map((m: Muscle) => m.nameEng);
    } else if (i18n.language === 'ru') {
        musclesMap = muscles.map((m: Muscle) => m.name);
    }

    return (
        <div onClick={clickHandler} className={classNames(cls.ExerciseCard, {}, [className])}>
            <div className={cls.pictureWrapper}>
                {
                    imageUrl
                        ? (
                            <img
                                className={cls.picture}
                                src={serverUrl + imageUrl}
                                alt="Изображение программы"
                            />
                        )
                        : <Picture className={cls.picture} />
                }
            </div>
            <h2 className={cls.title}>{name}</h2>
            <p>
                { musclesMap.join(', ')}
            </p>
        </div>
    );
};
