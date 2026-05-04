import { useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import cls from './ExerciseCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { serverUrl } from '@/shared/const/serverUrl.ts';
import { Tag, TagType } from '@/shared/ui/Tag/Tag.tsx';
import type { Muscle } from '@/entities/Muscle/model/types/muscleSchema.ts';

interface ExerciseCardProps {
    exerciseId: number;
    imageUrl: string;
    name: string;
    primaryMuscle: Muscle | undefined;
    secondaryMuscles: Muscle[] | undefined
}

// Получать, пользовательское ли упражнение или нет будем из запроса API /exercises/:id

export const ExerciseCard = (props : ExerciseCardProps) => {
    const {
        // pictureUrl,
        // muscles,
        name,
        exerciseId,
        imageUrl,
        primaryMuscle,
        secondaryMuscles,
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const clickHandler = () => {
        navigate(`${AuthRoutePath.exercise_details}${exerciseId}`, { state: { from: location.state?.from } });
    };

    // let musclesMap: (string | undefined)[] = [];
    //
    // if (i18n.language === 'en') {
    //     musclesMap = muscles.map((m: Muscle) => m.nameEng);
    // } else if (i18n.language === 'ru') {
    //     musclesMap = muscles.map((m: Muscle) => m.name);
    // }

    const secondaryMuscleTags = secondaryMuscles?.map((m) => <Tag name={m.name} key={m.id} />);

    return (
        <div onClick={clickHandler} className={classNames(cls.ExerciseCard, {}, ['card'])}>
            <div className={cls.imageWrapper}>
                {
                    // imageUrl
                    //     ? (
                    <img
                        className={cls.image}
                        src={serverUrl + imageUrl}
                        alt={t('Изображение упражнения')}
                    />
                    // )
                    // : <Picture className={cls.picture} />
                }
            </div>
            <div className="card-body">
                <h4 className={classNames(cls.cardTitle, {}, ['card-title'])}>{name}</h4>
                <div className={cls.muscles}>
                    <Tag name={primaryMuscle?.name} type={TagType.PRIMARY} />
                    {secondaryMuscleTags}
                </div>
            </div>
        </div>
    );
};
