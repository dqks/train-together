import { useTranslation } from 'react-i18next';
import { type Params, useLocation } from 'react-router';
import cls from './DisplayMode.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { serverUrl } from '@/shared/const/serverUrl.ts';
import { Badge } from '@/shared/ui/Badge/Badge.tsx';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { DeleteExerciseButton } from '@/features/DeleteExercise';
import Tick from '@/shared/assets/icons/tick.svg?react';
import LeftArrow from '@/shared/assets/icons/leftArrow.svg?react';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import Picture from '../../../../shared/assets/icons/picture.svg?react';
import type { ExerciseDetails } from '@/entities/Exercise';

interface DisplayModeProps {
    className?: string;
    setEditMode: () => void,
    isOwner: boolean
    exerciseDetails: ExerciseDetails | null
    params: Params<string>
}

export const DisplayMode = (props : DisplayModeProps) => {
    const { t } = useTranslation();

    const {
        className,
        setEditMode,
        isOwner,
        exerciseDetails,
        params,
    } = props;

    const location = useLocation();

    return (
        <>
            <AppLink className={cls.backLink} to={AuthRoutePath.exercises}>
                <LeftArrow className={cls.backLinkSvg} />
                {t('К списку упражнений')}
            </AppLink>
            <div className={classNames(cls.DisplayMode, {}, [className])}>
                <div className={cls.exerciseHero}>
                    {
                        exerciseDetails?.image
                            ? (
                                <img
                                    alt={t('Изображение упражнения')}
                                    src={serverUrl + exerciseDetails.image}
                                    className={cls.exercisePicture}
                                />
                            )
                            : (
                                <Picture className={cls.exercisePicture} />
                            )
                    }
                </div>
                <div className={cls.exerciseHeader}>
                    <h1 className={cls.exerciseTitle}>{exerciseDetails?.name}</h1>
                    <div className={cls.meta}>
                        <Badge className={cls.exerciseBadge} text="Средняя" />
                        <Badge className={cls.exerciseBadge} text="Штанга" />
                    </div>
                </div>
                <div className={cls.exerciseSection}>
                    <h2 className={cls.sectionTitle}>Описание</h2>
                    <p className={cls.exerciseDescription}>
                        <strong className={cls.strong}>Жим лёжа</strong>
                        {' '}
                        — базовое упражнение для развития грудных мышц, передних дельт и трицепсов. Одно из трёх главных
                        движений в пауэрлифтинге.
                    </p>
                </div>
                <div className={cls.exerciseSection}>
                    <h2 className={cls.sectionTitle}>Техника выполнения</h2>
                    <div className={cls.stepsList}>
                        <div className={cls.stepItem}>
                            <span className={cls.stepNumber}>1</span>
                            <p className={cls.stepText}>
                                Позиция. Лягте на скамью, ноги на полу. Спина слегка прогнута, ягодицы и лопатки
                                касаются
                                скамьи.
                            </p>
                        </div>
                    </div>
                    <div className={cls.stepItem}>
                        <span className={cls.stepNumber}>1</span>
                        <p className={cls.stepText}>
                            Позиция. Лягте на скамью, ноги на полу. Спина слегка прогнута, ягодицы и лопатки касаются
                            скамьи.
                        </p>
                    </div>
                    <div className={cls.stepItem}>
                        <span className={cls.stepNumber}>1</span>
                        <p className={cls.stepText}>
                            Позиция. Лягте на скамью, ноги на полу. Спина слегка прогнута, ягодицы и лопатки касаются
                            скамьи.
                        </p>
                    </div>
                    <div className={cls.stepItem}>
                        <span className={cls.stepNumber}>1</span>
                        <p className={cls.stepText}>
                            Позиция. Лягте на скамью, ноги на полу. Спина слегка прогнута, ягодицы и лопатки касаются
                            скамьи.
                        </p>
                    </div>
                </div>
                <div className={cls.exerciseSection}>
                    <h2 className={cls.sectionTitle}>Советы</h2>
                    <div className={cls.tipsList}>
                        <div className={cls.tipItem}>
                            <Tick className={cls.tickIcon} />
                            <p>Используйте страховку при работе с большим весом</p>
                        </div>
                        <div className={cls.tipItem}>
                            <Tick className={cls.tickIcon} />
                            <p>Используйте страховку при работе с большим весом</p>
                        </div>
                        <div className={cls.tipItem}>
                            <Tick className={cls.tickIcon} />
                            <p>Используйте страховку при работе с большим весом</p>
                        </div>
                        <div className={cls.tipItem}>
                            <Tick className={cls.tickIcon} />
                            <p>Используйте страховку при работе с большим весом</p>
                        </div>
                    </div>
                </div>

                <div className={cls.exerciseSection}>
                    <h2 className={cls.sectionTitle}>Задействованные мышцы</h2>
                    <div className={cls.muscleList}>
                        <div className={cls.muscleItem}>
                            Мышца
                        </div>
                        <div className={cls.muscleItem}>
                            Мышца
                        </div>
                        <div className={cls.muscleItem}>
                            Мышца
                        </div>
                        <div className={cls.muscleItem}>
                            Мышца
                        </div>
                    </div>
                </div>
                {
                    isOwner && (
                        <div className={cls.exerciseSection}>
                            <h2 className={cls.sectionTitle}>{t('Управление упражнением')}</h2>
                            <div className={cls.exerciseManagement}>
                                <Button
                                    theme={ThemeButton.PRIMARY}
                                    type="button"
                                    onClick={setEditMode}
                                >
                                    {t('Редактировать')}
                                </Button>
                                <DeleteExerciseButton
                                    exerciseId={Number(params.id)}
                                    redirectRoute={location.state?.from || AuthRoutePath.my_exercises}
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};
