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

interface SidePanelAddContentProps {
    className?: string;
    closeHandler: () => void
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
        dispatch(createUserExercise({
            name: exerciseName,
            progressionType: Number(selectedProgressionType),
            closeHandler,
        }));
    };

    const progressionOptions = exerciseProgressionTypes?.map((t) => <option value={t.id}>{t.name}</option>);

    return (
        <form className={classNames(cls.SidePanelAddContent, {}, [className])}>
            <h2 className={cls.sidePanelTitle}>{t('Создание упражнения')}</h2>
            <div className={cls.inputWrapper}>
                <label htmlFor="exerciseName">{t('Название')}</label>
                <Input
                    id="exerciseName"
                    type="text"
                    name="exerciseName"
                    value={exerciseName}
                    onChange={onChangeName}
                />
            </div>
            <MuscleFilterList />
            <EquipmentFilterList />
            <Select
                id="progressionType"
                name="progressionType"
                onChange={onChangeType}
                value={selectedProgressionType}
            >
                <option selected disabled value="null">Тип прогрессии</option>
                {progressionOptions}
            </Select>
            <Button onClick={createHandler} type="button">{t('Создать')}</Button>
        </form>
    );
};

export default SidePanelAddContent;
