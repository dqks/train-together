import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { type MouseEvent, useEffect, useState } from 'react';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import cls from './AddExerciseForm.module.scss';
import { EquipmentCardList } from '@/entities/Equipment/ui/EquipmentCardList/EquipmentCardList.tsx';
import { PrimaryMuscleCardList } from '@/entities/Muscle/ui/PrimaryMuscleCardList/PrimaryMuscleCardList.tsx';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { getExerciseName } from '../../model/selectors/getExerciseName/getExerciseName.ts';
import { addExerciseActions } from '../../model/slice/createExerciseSlice.ts';
import { createUserExercise } from '../../model/services/createExercise/createUserExercise.ts';
import { fetchProgressionTypes, getExerciseProgressionTypes } from '@/entities/ExerciseProgression';
import { Select } from '@/shared/ui/Select/Select.tsx';
import { getProgressionType } from '../../model/selectors/getProgressionType/getProgressionType.ts';
import { getPrimaryMuscleId } from '../../model/selectors/getPrimaryMuscleId/getPrimaryMuscleId.ts';
import { getEquipmentId } from '../../model/selectors/getEquipmentId/getEquipmentId.ts';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage.tsx';
import { getErrors } from '../../model/selectors/getErrors/getErrors.ts';
import { getIsLoading } from '@/features/AddExercise/model/selectors/getIsLoading/getIsLoading.ts';
import { FileInput } from '@/shared/ui/FileInput/FileInput.tsx';

interface AddExerciseFormProps {
    closeHandler?: () => void
}

const AddExerciseForm = ({ closeHandler }: AddExerciseFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const exerciseName = useSelector(getExerciseName);

    const isLoading = useSelector(getIsLoading);

    const exerciseProgressionTypes = useSelector(getExerciseProgressionTypes);
    const selectedProgressionType = useSelector(getProgressionType);

    const selectedPrimaryMuscleId = useSelector(getPrimaryMuscleId);
    const selectedEquipmentId = useSelector(getEquipmentId);

    const errors = useSelector(getErrors);

    const [image, setImage] = useState<File | undefined>(undefined);

    useEffect(() => {
        dispatch(fetchProgressionTypes());
    }, [dispatch]);

    const onChangeName = (value: string) => {
        dispatch(addExerciseActions.setName(value));
    };

    const onChangeType = (value: string) => {
        dispatch(addExerciseActions.setProgressionType(value));
    };

    const onChangEquipment = (value: string) => {
        dispatch(addExerciseActions.setEquipmentId(Number(value)));
    };

    const onChangePrimaryMuscle = (value: string) => {
        dispatch(addExerciseActions.setPrimaryMuscleId(Number(value)));
    };

    const onChangeImage = (file: File | undefined) => {
        setImage(file);
    };

    const createHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const errors = {
            name: [''],
            selectedProgressionType: [''],
            selectedPrimaryMuscleId: [''],
            selectedEquipmentId: [''],
        };

        let hasErrors = false;

        if (!exerciseName.trim()) {
            errors.name.push('Обязательное поле');
            hasErrors = true;
        }

        if (selectedProgressionType === 'default') {
            errors.selectedProgressionType.push('Выбор обязателен');
            hasErrors = true;
        }

        if (!selectedPrimaryMuscleId) {
            errors.selectedPrimaryMuscleId.push('Выбор обязателен');
            hasErrors = true;
        }

        if (!selectedEquipmentId) {
            errors.selectedEquipmentId.push('Выбор обязателен');
            hasErrors = true;
        }

        if (hasErrors) {
            dispatch(addExerciseActions.setErrors(errors));
            return;
        }

        if (closeHandler) {
            dispatch(createUserExercise({
                name: exerciseName,
                progressionType: Number(selectedProgressionType),
                primaryMuscleId: selectedPrimaryMuscleId,
                equipmentId: selectedEquipmentId,
                closeHandler,
                image,
            }));
        }
    };

    const progressionOptions = exerciseProgressionTypes
        ?.map((t) => <option key={t.name} value={t.id}>{t.name}</option>);

    return (
        <form className={cls.AddExerciseFormProps} id="addExerciseForm">
            <div className={classNames(cls.groupGap, {}, ['form-group'])}>
                <label htmlFor="exerciseName" className="form-label">{t('Название')}</label>
                <Input
                    name="exerciseName"
                    type="text"
                    id="exerciseName"
                    value={exerciseName}
                    onChange={onChangeName}
                    placeholder={t('Например: Жим гантелей')}
                />
                <ErrorMessage messages={errors?.name} />
            </div>

            <div className={classNames(cls.groupGap, {}, ['form-group'])}>
                <label htmlFor="equipmentSelector" className="form-label">{t('Оборудование')}</label>
                <div className={cls.selectorGrid} id="equipmentSelector">
                    <EquipmentCardList
                        onChange={onChangEquipment}
                        selectedEquipment={selectedEquipmentId?.toString()}
                    />
                </div>
                <ErrorMessage messages={errors?.selectedEquipmentId} />
            </div>

            <div className={classNames(cls.groupGap, {}, ['form-group'])}>
                <label htmlFor="muscleSelector" className="form-label">
                    {t('Основная мышца')}
                </label>
                <div className={cls.selectorGrid} id="muscleSelector">
                    <PrimaryMuscleCardList
                        selectedMuscle={selectedPrimaryMuscleId?.toString()}
                        onChange={onChangePrimaryMuscle}
                    />
                </div>
                <ErrorMessage messages={errors?.selectedPrimaryMuscleId} />
            </div>

            <div className={classNames(cls.groupGap, {}, ['form-group'])}>
                <FileInput onChangeImage={onChangeImage} value={image} />
            </div>

            <div className={classNames(cls.groupGap, {}, ['form-group'])}>
                <label htmlFor="progressionType" className="form-label">{t('Тип прогрессии')}</label>
                <Select
                    value={selectedProgressionType}
                    name="progressionType"
                    id="progressionType"
                    onChange={onChangeType}
                >
                    <option value="default" disabled>{t('Выберите...')}</option>
                    {progressionOptions}
                </Select>
                <ErrorMessage messages={errors?.selectedProgressionType} />
            </div>

            <Button
                disabled={isLoading}
                type="submit"
                onClick={createHandler}
                className={cls.addButton}
                id="submitBtn"
            >
                {t('Добавить упражнение')}
            </Button>
        </form>
    );
};

export default AddExerciseForm;
