import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EditExercise.module.scss';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { EquipmentCardList } from '@/entities/Equipment';
import { PrimaryMuscleCardList, SecondaryMuscleCardList } from '@/entities/Muscle';
import type { ExerciseDetails } from '@/entities/Exercise';
import { FileInput } from '@/shared/ui/FileInput/FileInput.tsx';
import { updateExercise } from '@/features/EditExercise/model/services/updateExercise/updateExercise.ts';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import Save from '@/shared/assets/icons/save.svg?react';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';

interface EditExerciseProps {
    className?: string;
    setDisplayMode: () => void
    exerciseDetails: ExerciseDetails | null
}

export const EditExercise = ({ className, exerciseDetails, setDisplayMode } : EditExerciseProps) => {
    const { t } = useTranslation();
    const [name, setName] = useState(exerciseDetails?.name);
    const [equipmentId, setEquipmentId] = useState(exerciseDetails?.equipment.id.toString());
    const [primaryMuscleId, setPrimaryMuscleId] = useState(exerciseDetails?.primaryMuscle.id.toString());
    const [secondaryMuscles, setSecondaryMuscles] = useState<string[]>(
        exerciseDetails?.secondaryMuscles?.map((m) => m.id.toString()) || [],
    );
    const [image, setImage] = useState<File | string | undefined>(exerciseDetails?.image);
    const navigate = useNavigate();

    // console.log(secondaryMuscles);

    const onChangeName = useCallback((name: string) => {
        setName(name);
    }, [setName]);

    const onChangeEquipment = useCallback((value: string) => {
        setEquipmentId(value);
    }, [setEquipmentId]);

    const onChangePrimaryMuscle = useCallback((value: string) => {
        setPrimaryMuscleId(value);
    }, [setPrimaryMuscleId]);

    const onChangeImage = useCallback((file : File | undefined) => {
        setImage(file);
    }, [setImage]);

    const onChangeSecondaryMuscle = useCallback((id : string) => {
        setSecondaryMuscles((m) => [...m, id]);
    }, [setImage]);

    const onEdit = async () => {
        const response = await updateExercise({
            id: exerciseDetails?.id,
            image: typeof image === 'object' ? image : undefined,
            name,
            equipmentId,
            primaryMuscleId,
            // exerciseProgressionTypeId,
        });
        if (response.resultCode === 0) {
            navigate(AuthRoutePath.my_exercises);
        }
    };

    return (
        <form className={classNames(cls.EditExercise, {}, [className])}>
            <div className={classNames(cls.formGroup, {}, ['form-group'])}>
                <label className="form-label" htmlFor="exerciseName">{t('Название упражнения')}</label>
                <Input
                    value={name}
                    onChange={onChangeName}
                    type="text"
                    id="exerciseName"
                    name="exerciseName"
                />
            </div>
            <div className={classNames(cls.formGroup, {}, ['form-group'])}>
                <label className="form-label" htmlFor="exerciseName">{t('Оборудование')}</label>
                <div className={cls.selectorGrid}>
                    <EquipmentCardList
                        onChange={onChangeEquipment}
                        selectedEquipment={equipmentId}
                    />
                </div>
            </div>
            <div className={classNames(cls.formGroup, {}, ['form-group'])}>
                <label className="form-label" htmlFor="exerciseName">{t('Основная мышца')}</label>
                <div className={cls.selectorGrid}>
                    <PrimaryMuscleCardList
                        onChange={onChangePrimaryMuscle}
                        selectedMuscle={primaryMuscleId}
                    />
                </div>
            </div>
            <div className={classNames(cls.formGroup, {}, ['form-group'])}>
                <label className="form-label">{t('Второстепенные мышцы')}</label>
                <p className={cls.hint}>{t('Выберите мышцы, которые также задействованы')}</p>
                <div className={cls.selectorGrid}>
                    <SecondaryMuscleCardList onChange={onChangeSecondaryMuscle} />
                </div>
            </div>
            <div className={classNames(cls.formGroup, {}, ['form-group'])}>
                <FileInput
                    value={image}
                    onChangeImage={onChangeImage}
                />
            </div>
            <div className={cls.buttonWrapper}>
                <Button
                    onClick={setDisplayMode}
                    theme={ThemeButton.OUTLINE}
                    type="button"
                >
                    {t('Отмена')}
                </Button>
                <Button type="button" onClick={onEdit}>
                    <Save className={cls.saveIcon} />
                    {t('Сохранить')}
                </Button>
            </div>
        </form>
    );
};
