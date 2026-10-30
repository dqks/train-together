import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './EditMyProgram.module.scss';
import { Sidebar } from './Sidebar/Sidebar';
import { MainInfo } from './MainInfo/MainInfo';
import {
    type Day,
    fetchCreateInfo,
    fetchProgramDetails,
    getProgramDetails,
    getProgramDifficulties,
    getProgramGoals,
    getProgramIsLoading,
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
    getSelectedDiffId,
    getSelectedGoalId,
    getSendUpdateDays,
    getSendUpdateProgramInfo,
    getTrainingDays,
} from '../model/selectors/editFormSelectors.ts';
import { updateProgramInfo } from '../model/services/updateProgram/updateProgramInfo.ts';
import { updateDays } from '../model/services/updateDays/updateDays.ts';

interface EditMyProgramProps {
    programId: number | undefined
    onCancel: () => void
}

const reducers: ReducerList = {
    editProgram: editProgramReducer,
};

export const EditMyProgram = (props: EditMyProgramProps) => {
    const {
        programId,
        onCancel,
    } = props;
    const dispatch = useDispatch();
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
    const trainingDays = useSelector(getTrainingDays);
    const errorProgramInfo = useSelector(getErrorProgramInfo);
    // const errorDays = useSelector(getErrorDays);
    const [image, setImage] = useState<File | string | undefined>(undefined);
    const [isAddingExercise, setIsAddingExercise] = useState<boolean>(false);

    useEffect(() => {
        if (programId) {
            dispatch(fetchProgramDetails(programId));
        }
    }, [programId]);

    useEffect(() => {
        if (programDetails) {
            dispatch(editProgramActions.initEditForm(programDetails));
            setImage(programDetails.imageUrl);
        }
    }, [dispatch, programDetails]);

    const programGoals = useSelector(getProgramGoals);
    const programDifficulties = useSelector(getProgramDifficulties);

    useEffect(() => {
        if (!programGoals && !programDifficulties) {
            dispatch(fetchCreateInfo());
        }
    }, [dispatch]);

    const onChangeName = useCallback((value: string) => {
        dispatch(editProgramActions.setName(value));
    }, []);

    const onChangeDescription = useCallback((value: string) => {
        dispatch(editProgramActions.setDescription(value));
    }, []);

    const onChangeIsPublic = useCallback((value: boolean) => {
        dispatch(editProgramActions.setIsPublic(value));
    }, []);

    const onChangeImage = useCallback((file: File | undefined) => {
        setImage(file);
        dispatch(editProgramActions.setDiableEdit(false));
        dispatch(editProgramActions.setSendUpdateProgramInfo(true));
    }, []);

    const onChangeGoal = useCallback((id: string) => {
        dispatch(editProgramActions.setSelectedGoalId(Number(id)));
    }, []);

    const onChangeDiff = useCallback((id: string) => {
        dispatch(editProgramActions.setSelectedDiffId(Number(id)));
    }, []);

    const onChangeTrainingDays = useCallback((days: Day[] | undefined) => {
        dispatch(editProgramActions.setTrainingDays(days ?? []));
    }, []);

    const onSave = useCallback(async () => {
        if (sendUpdateProgramInfo) {
            dispatch(updateProgramInfo({
                id: programId,
                name,
                description,
                publicSetting: isPublic ? 'true' : 'false',
                image: image instanceof File ? image : undefined,
                diffId: selectedDiffId?.toString(),
                goalId: selectedGoalId?.toString(),
            }));
        }
        if (sendUpdateDays) {
            const details = trainingDays?.map((td) => ({
                dayId: td.day.id,
                name: td.name,
                description: td.description,
                exercises: [
                    ...td.exercises.map((ex) => ({
                        exerciseId: ex.exercise.id,
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
        image,
        name,
        description,
        isPublic,
        selectedGoalId,
        selectedDiffId,
        trainingDays,
        onCancel,
    ]);

    const onBack = useCallback(() => {
        setIsAddingExercise(false);
    }, []);

    const onAddExerciseToProgram = useCallback(() => {
        setIsAddingExercise(false);
    }, []);

    const onSelectExercise = useCallback(() => {
        setIsAddingExercise(true);
    }, []);

    if (isLoading) {
        return <PageLoader />;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            {
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
                                        onSelectExercise={onSelectExercise}
                                        trainingDays={trainingDays}
                                        setTrainingDays={onChangeTrainingDays}
                                    />
                                </div>
                                <Sidebar
                                    disableEdit={disableEdit}
                                    daysAmount={trainingDays?.length}
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
            }
        </DynamicModuleLoader>
    );
};
