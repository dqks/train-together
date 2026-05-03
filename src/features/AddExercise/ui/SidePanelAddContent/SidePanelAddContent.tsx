import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import cls from './SidePanelAddContent.module.scss';
import { EquipmentFilterList }
    from '@/entities/Equipment/ui/EquipmentFilterList/EquipmentFilterList.tsx';
import { MuscleFilterList } from '@/entities/Muscle/ui/MuscleFilterList/MuscleFilterList.tsx';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { getExerciseName } from '../../model/selectors/getExerciseName/getExerciseName.ts';
import { addExerciseActions } from '../../model/slice/createExerciseSlice.ts';
import { createUserExercise } from '../../model/services/createExercise/createUserExercise.ts';
import { fetchProgressionTypes, getExerciseProgressionTypes } from '@/entities/ExerciseProgression';
import { Select } from '@/shared/ui/Select/Select.tsx';
import { getProgressionType } from '../../model/selectors/getProgressionType/getProgressionType.ts';
import { MuscleCard } from '@/entities/Muscle/ui/MuscleCard/MuscleCard.tsx';
import { EquipmentCard } from '@/entities/Equipment';

interface SidePanelAddContentProps {
    className?: string;
    closeHandler?: () => void
}

const SidePanelAddContent = ({ className, closeHandler }: SidePanelAddContentProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const exerciseName = useSelector(getExerciseName);
    const exerciseProgressionTypes = useSelector(getExerciseProgressionTypes);
    const selectedProgressionType = useSelector(getProgressionType);

    useEffect(() => {
        dispatch(fetchProgressionTypes());
    }, [dispatch]);

    const onChangeName = (value: string) => {
        dispatch(addExerciseActions.setName(value));
    };

    const onChangeType = (value: string) => {
        dispatch(addExerciseActions.setProgressionType(value));
    };

    const createHandler = () => {
        if (selectedProgressionType === 'null') {
            return;
        }
        if (closeHandler) {
            dispatch(createUserExercise({
                name: exerciseName,
                progressionType: Number(selectedProgressionType),
                closeHandler,
            }));
        }
    };

    const progressionOptions = exerciseProgressionTypes?.map((t) => <option value={t.id}>{t.name}</option>);

    return (
        <form className={cls.SidePanelAddContent} id="addExerciseForm">
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
            </div>

            <div className={classNames(cls.groupGap, {}, ['form-group'])}>
                <label className="form-label">{t('Оборудование')}</label>
                <div className={cls.selectorGrid} id="equipmentSelector">
                    <EquipmentCard />
                    <EquipmentCard />
                    <EquipmentCard />
                </div>
                <div className={cls.selectedPreview} id="equipmentPreview">
                    <svg
                        className={cls.selectedPreviewSvg}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span id="equipmentPreviewText" className={cls.selectedPreviewText}>Выбранное оборудование</span>
                </div>
            </div>

            <div className={classNames(cls.groupGap, {}, ['form-group'])}>
                <label className="form-label">
                    {t('Основная мышца')}
                </label>
                <div className={cls.selectorGrid} id="muscleSelector">
                    <MuscleCard />
                    <MuscleCard />
                    <MuscleCard />
                    <MuscleCard />
                </div>
                <div className={cls.selectedPreview} id="musclePreview">
                    <svg
                        className={cls.selectedPreviewSvg}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span id="musclePreviewText" className={cls.selectedPreviewText}>Выбранная мышца</span>
                </div>
            </div>

            <div className={classNames(cls.groupGap, {}, ['form-group'])}>
                <label className="form-label">{t('Изображение')}</label>
                <div className="image-upload" id="imageUpload">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <div className="image-upload-text">
                        <span>{t('Нажмите для загрузки')}</span>
                    </div>
                    <input type="file" id="imageInput" accept="image/*" />
                </div>
            </div>

            <Button type="submit" className={cls.addButton} id="submitBtn">{t('Добавить упражнение')}</Button>
        </form>
    );
};

export default SidePanelAddContent;
