import {
    type ReactNode, useCallback, useEffect, useMemo, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './EditMyProgram.module.scss';
import { Sidebar } from './Sidebar/Sidebar';
import { MainInfo } from './MainInfo/MainInfo';
import {
    fetchCreateInfo,
    fetchDaysOfWeek,
    fetchProgramDetails,
    getDaysOfWeek,
    getProgramDetails,
    getProgramDifficulties,
    getProgramGoals,
    getProgramIsLoading,
    type ExerciseDay,
} from '@/entities/Program';
import { TrainingDays } from './TrainingDays/TrainingDays.tsx';
import { ExerciseSelection } from './ExerciseSelection/ExerciseSelection.tsx';
import { editProgramActions, editProgramReducer } from '../model/slice/editProgramSlice.ts';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader.tsx';
import {
    getDescription,
    getDisableEdit,
    getErrorProgramInfo,
    getIsLoadingDays,
    getIsLoadingPrograms,
    getIsPublic,
    getName,
    getSavingResult,
    getSelectedDiffId,
    getSelectedGoalId,
    getSendUpdateDays,
    getSendUpdateProgramInfo,
    getDaysInfo,
    getErrorDays,
    getSelectedDayId,
    getSelectedExercises,
    getExercisesAmount,
} from '../model/selectors/editProgramSelectors.ts';
import { updateProgramInfo } from '../model/services/updateProgram/updateProgramInfo.ts';
import { updateDays } from '../model/services/updateDays/updateDays.ts';
import { getUserId } from '@/entities/User';
import type { EditDaysInfo } from '../model/types/editProgramSchema.ts';

interface EditMyProgramProps {
    programId: number | undefined
    onCancel: () => void
}

const reducers: ReducerList = {
    editProgram: editProgramReducer,
};

const forbiddenImageTypes = ['image/gif'];

export const EditMyProgram = (props: EditMyProgramProps) => {
    const {
        programId,
        onCancel,
    } = props;
    const dispatch = useDispatch();
    const userId = useSelector(getUserId);
    const sendUpdateDays = useSelector(getSendUpdateDays);
    const sendUpdateProgramInfo = useSelector(getSendUpdateProgramInfo);
    const disableEdit = useSelector(getDisableEdit);
    const programDetails = useSelector(getProgramDetails);
    const isLoading = useSelector(getProgramIsLoading);
    const isLoadingPrograms = useSelector(getIsLoadingPrograms);
    const isLoadingDays = useSelector(getIsLoadingDays);
    const name = useSelector(getName);
    const description = useSelector(getDescription);
    const isPublic = useSelector(getIsPublic);
    const selectedGoalId = useSelector(getSelectedGoalId);
    const selectedDiffId = useSelector(getSelectedDiffId);
    const daysInfo = useSelector(getDaysInfo);
    const errorProgramInfo = useSelector(getErrorProgramInfo);
    const daysOfWeek = useSelector(getDaysOfWeek);
    const errorDays = useSelector(getErrorDays);
    const savingResult = useSelector(getSavingResult);
    const selectedDayId = useSelector(getSelectedDayId);
    const selectedExercises = useSelector(getSelectedExercises);
    const exerciseAmount = useSelector(getExercisesAmount)

    const [image, setImage] = useState<File | string | undefined>(undefined);
    const [isAddingExercise, setIsAddingExercise] = useState<boolean>(false);

    useEffect(() => {
        if (programId && !programDetails) {
            dispatch(fetchProgramDetails(programId));
        }
    }, [dispatch, programDetails, programId, userId]);

    useEffect(() => {
        if (programDetails) {
            dispatch(editProgramActions.initEditForm(programDetails));
            setImage(programDetails.imageUrl);
        }
    }, [dispatch, programDetails]);

    useEffect(() => {
        if (!daysOfWeek) {
            dispatch(fetchDaysOfWeek());
        }
    }, [daysOfWeek, dispatch]);

    const programGoals = useSelector(getProgramGoals);
    const programDifficulties = useSelector(getProgramDifficulties);

    useEffect(() => {
        if (!programGoals && !programDifficulties) {
            dispatch(fetchCreateInfo());
        }
    }, [dispatch, programDifficulties, programGoals]);

    const onChangeName = useCallback((value: string) => {
        dispatch(editProgramActions.setName(value));
    }, [dispatch]);

    const onChangeDescription = useCallback((value: string) => {
        dispatch(editProgramActions.setDescription(value));
    }, [dispatch]);

    const onChangeIsPublic = useCallback((value: boolean) => {
        dispatch(editProgramActions.setIsPublic(value));
    }, [dispatch]);

    const onChangeImage = useCallback((file: File | undefined) => {
        if (file) {
            if (forbiddenImageTypes.includes(file?.type)) {
                dispatch(editProgramActions.setErrorProgramInfo({
                    image: ['Неверный тип изображения'],
                }));
                return;
            }
        }
        setImage(file);
        if (errorProgramInfo?.image) {
            // становится не undefined а {}
            const error = { ...errorProgramInfo };
            delete error.image;
            dispatch(editProgramActions.setErrorProgramInfo(error));
        }
        dispatch(editProgramActions.setDiableEdit(false));
        dispatch(editProgramActions.setSendUpdateProgramInfo(true));
    }, [dispatch, errorProgramInfo]);

    const onChangeGoal = useCallback((id: string) => {
        dispatch(editProgramActions.setSelectedGoalId(Number(id)));
    }, [dispatch]);

    const onChangeDiff = useCallback((id: string) => {
        dispatch(editProgramActions.setSelectedDiffId(Number(id)));
    }, [dispatch]);

    const onChangeTrainingDays = useCallback((days: EditDaysInfo[] | undefined) => {
        console.log(days)
        dispatch(editProgramActions.setTrainingDays(days ?? []));
    }, [dispatch]);

    const onSave = useCallback(async () => {
        if (sendUpdateProgramInfo) {
            dispatch(updateProgramInfo({
                id: programId,
                name,
                description ,
                publicSetting: isPublic ? 'true' : 'false',
                image,
                diffId: selectedDiffId?.toString(),
                goalId: selectedGoalId?.toString(),
            }));
        }
        if (sendUpdateDays) {
            // Бекенд возвращает exericseId в виде string
            const details = daysInfo?.map((td) => ({
                dayId: td.dayOfWeekId,
                name: td.name,
                description: td.description,
                exercises: [
                    ...td.exercises.map((ex) => ({
                        exerciseId: Number(ex.exercise.id),
                        sets: ex.sets,
                        reps: ex.reps,
                        exerciseOrder: ex.exerciseOrder,
                    })),
                ],
            }));
            dispatch(updateDays({
                programId,
                details,
            }));
        }
    }, [
        sendUpdateProgramInfo,
        sendUpdateDays,
        dispatch,
        programId,
        name,
        description,
        isPublic,
        image,
        selectedDiffId,
        selectedGoalId,
        daysInfo,
    ]);

    const onBack = useCallback(() => {
        setIsAddingExercise(false);
        dispatch(editProgramActions.setSelectedExercises([]))
    }, [dispatch]);

    const onAddExerciseToProgram = useCallback(() => {
        setIsAddingExercise(false);
        const exercises = daysInfo
            ?.find(d => d.dayId == selectedDayId)
            ?.exercises

        if (exercises) {
            const days = daysInfo?.map(d => {
                if (d.dayId != selectedDayId) {
                    return d
                }
                let exerciseLastOrder = exercises?.length - 1            
                const exercsises = selectedExercises.map(e => ({...e, exerciseOrder: ++exerciseLastOrder}))
                return {
                    ...d,
                    exercises: [...d.exercises, ...exercsises],
                } as EditDaysInfo
            })
            console.log(days, "days");
            dispatch(editProgramActions.setTrainingDays(days))
            dispatch(editProgramActions.setSelectedExercises([]))
        }
    }, [selectedDayId, dispatch, selectedExercises]);

    const onSelectExercise = useCallback((dayId: number) => {
        dispatch(editProgramActions.setSelectedDayId(dayId))
        setIsAddingExercise(true);
    }, [dispatch]);

    let EditMyProgramContent: ReactNode = (
        isAddingExercise
            ? (
                <ExerciseSelection
                    onBack={onBack}
                    onAddExercise={onAddExerciseToProgram}
                />
            )
            : (
                <div className={cls.programContainer}>
                    <div className={cls.programGrid}>
                        <div className={cls.programMain}>
                            <MainInfo
                                errorProgramInfo={errorProgramInfo}
                                onChangeDescription={onChangeDescription}
                                onChangeName={onChangeName}
                                image={image}
                                onChangeImage={onChangeImage}
                                name={name || ''}
                                description={description}
                            />
                            <TrainingDays
                                errorDays={errorDays}
                                trainingDays={programDetails?.days}
                                daysOfWeek={daysOfWeek}
                                onSelectExercise={onSelectExercise}
                                editDaysInfo={daysInfo}
                                onChangeTrainingDays={onChangeTrainingDays}
                            />
                        </div>
                        <Sidebar
                            exerciseAmount={exerciseAmount}
                            savingResult={savingResult}
                            errorStatus={errorDays?.status}
                            disableEdit={disableEdit}
                            daysAmount={daysInfo?.length}
                            onChangeDiff={onChangeDiff}
                            onChangeGoal={onChangeGoal}
                            selectedProgramDifficultyId={selectedDiffId}
                            selectedProgramGoalId={selectedGoalId}
                            programGoals={programGoals}
                            programDifficulties={programDifficulties}
                            isLoading={(isLoadingPrograms || isLoadingDays) || false}
                            onCancel={onCancel}
                            onChangeIsPublic={onChangeIsPublic}
                            isPublic={isPublic}
                            onSave={onSave}
                        />
                    </div>
                </div>
            )
    );
    if (isLoading) {
        EditMyProgramContent = (<PageLoader />);
    }

    if (programDetails?.user.id !== userId && programDetails?.user.id !== undefined) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            {EditMyProgramContent}
        </DynamicModuleLoader>
    );
};
