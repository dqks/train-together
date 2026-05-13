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
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage.tsx';

interface EditExerciseProps {
    className?: string;
    setDisplayMode: () => void
    exerciseDetails: ExerciseDetails | null
}

type errorKeys = 'name' |
    'exerciseProgressionTypeId' |
    'primaryMuscleId' |
    'secondaryMuscleIds' |
    'equipmentId'

type ErrorObject = Partial<Record<errorKeys, string[]>>

export const EditExercise = ({ className, exerciseDetails, setDisplayMode } : EditExerciseProps) => {
    const { t } = useTranslation();
    const [name, setName] = useState<string | undefined>(exerciseDetails?.name);
    const [equipmentId, setEquipmentId] = useState(exerciseDetails?.equipment.id.toString());
    const [primaryMuscleId, setPrimaryMuscleId] = useState(exerciseDetails?.primaryMuscle.id.toString());
    const [secondaryMuscleIds, setSecondaryMuscleIds] = useState<string[]>(
        exerciseDetails?.secondaryMuscles?.map((m) => m.id.toString()) || [],
    );
    const [image, setImage] = useState<File | string | undefined>(exerciseDetails?.image);
    const [errors, setErrors] = useState<ErrorObject>({});
    const navigate = useNavigate();

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
        setSecondaryMuscleIds((m) => {
            const isChecked = m.indexOf(id, 0);

            if (isChecked !== -1) {
                m.splice(isChecked, 1);
                return [...m];
            }

            return [...m, id];
        });
    }, [setImage]);

    const onEdit = async () => {
        const errors: ErrorObject = {
            name: [''],
            secondaryMuscleIds: [''],
            equipmentId: [''],
            primaryMuscleId: [''],
            exerciseProgressionTypeId: [''],
        };
        let hasError = false;

        const trimmedName = name?.trim();

        if (!trimmedName) {
            errors?.name?.push('Поле обязательное');
            hasError = true;
        } else if (trimmedName?.length < 5) {
            errors?.name?.push('Минимум 5 символов');
            hasError = true;
        }

        if (primaryMuscleId && secondaryMuscleIds.includes(primaryMuscleId)) {
            errors.secondaryMuscleIds?.push('Дополнительные мышцы не могут содержать основную');
            hasError = true;
        }

        if (hasError) {
            setErrors(errors);
            return;
        }

        const response = await updateExercise({
            id: exerciseDetails?.id,
            image: typeof image === 'object' ? image : undefined,
            name,
            equipmentId,
            primaryMuscleId,
            secondaryMuscleIds,
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
                <ErrorMessage messages={errors?.name} />
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
                    <SecondaryMuscleCardList values={secondaryMuscleIds} onChange={onChangeSecondaryMuscle} />
                </div>
                <ErrorMessage messages={errors?.secondaryMuscleIds} />
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
