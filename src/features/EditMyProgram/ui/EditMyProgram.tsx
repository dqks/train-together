import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './EditMyProgram.module.scss';
import { Sidebar } from './Sidebar/Sidebar';
import { MainInfo } from './MainInfo/MainInfo';
import { updateProgram } from '../model/services/updateProgram/updateProgram.ts';
import {
    type Day,
    fetchCreateInfo, fetchProgramDetails, getProgramDifficulties, getProgramGoals,
} from '@/entities/Program';
import { TrainingDays } from './TrainingDays/TrainingDays.tsx';
import { updateDays } from '../model/services/updateDays/updateDays.ts';
import { ExerciseSelection } from './ExerciseSelection/ExerciseSelection.tsx';

interface EditMyProgramProps {
    programImageUrl: string | undefined
    programName: string | undefined
    programDescription: string | undefined
    programIsPublic: boolean | undefined
    programId: number | undefined
    selectedProgramGoalId: number | undefined
    selectedProgramDifficultyId: number | undefined
    programDays: Day[] | undefined
    onCancel: () => void
}

export const EditMyProgram = (props: EditMyProgramProps) => {
    const {
        programImageUrl,
        programName,
        programDescription,
        programIsPublic,
        programId,
        selectedProgramGoalId,
        selectedProgramDifficultyId,
        programDays,
        onCancel,
    } = props;

    const dispatch = useDispatch();

    // Main info
    const [name, setName] = useState<string>(programName || '');
    const [description, setDescription] = useState<string>(programDescription || '');
    const [isPublic, setIsPublic] = useState<boolean>(programIsPublic || false);
    const [image, setImage] = useState<File | string | undefined>(programImageUrl);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [isMainInfoEdited, setIsMainInfoEdited] = useState<boolean>(false);

    // Training days
    const [trainingDays, setTrainingDays] = useState<Day[] | undefined>(programDays);
    const [isAddingExercise, setIsAddingExercise] = useState<boolean>(true);

    const [
        selectedGoalId,
        setSelectedGoalId,
    ] = useState<number | undefined>(selectedProgramGoalId);
    const [
        selectedDiffId,
        setSelectedDiffId,
    ] = useState<number | undefined>(selectedProgramDifficultyId);

    const programGoals = useSelector(getProgramGoals);
    const programDifficulties = useSelector(getProgramDifficulties);

    useEffect(() => {
        if (!programGoals && !programDifficulties) {
            dispatch(fetchCreateInfo());
        }
    }, [dispatch]);

    const onChangeName = useCallback((value: string) => {
        setName(value);
    }, [setName]);

    const onChangeDescription = useCallback((value: string) => {
        setDescription(value);
    }, [setDescription]);

    const onChangeIsPublic = useCallback((value: boolean) => {
        setIsPublic(value);
    }, [setIsPublic]);

    const onChangeImage = useCallback((file: File | undefined) => {
        setImage(file);
    }, [setImage]);

    const onChangeGoal = useCallback((id: string) => {
        setSelectedGoalId(Number(id));
    }, [setImage]);

    const onChangeDiff = useCallback((id: string) => {
        setSelectedDiffId(Number(id));
    }, [setImage]);

    const onSave = useCallback(async () => {
        setIsLoading(true);

        const responseInfo = await updateProgram({
            id: programId,
            name,
            description,
            publicSetting: isPublic ? 'true' : 'false',
            image: image instanceof File ? image : undefined,
            diffId: selectedDiffId?.toString(),
            goalId: selectedGoalId?.toString(),
        });

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

        const responseDays = await updateDays({
            programId,
            details,
        });

        if (responseInfo.data.success && responseDays.data.success) {
            if (programId != null) {
                dispatch(fetchProgramDetails(programId));
            }
            onCancel();
        }

        setIsLoading(false);
    }, [
        setIsLoading,
        image,
        name,
        description,
        isPublic,
        selectedGoalId,
        selectedDiffId,
        trainingDays,
        onCancel,
    ]);

    const exercises = [{
        id: 1,
        name: 'ds',
        muscles: ['dsds'],
        equipment: ['dsds'],
    }];

    return (

        isAddingExercise
            ? <ExerciseSelection subtitle="Тест" exercises={exercises} onBack={() => {}} />
            : (
                <div className={cls.programContainer}>
                    <div className={cls.programGrid}>
                        <div className={cls.programMain}>
                            <MainInfo
                                onChangeDescription={onChangeDescription}
                                onChangeName={onChangeName}
                                image={image}
                                onChangeImage={onChangeImage}
                                name={name}
                                description={description}
                            />
                            <TrainingDays
                                trainingDays={trainingDays}
                                setTrainingDays={setTrainingDays}
                            />
                        </div>
                        <Sidebar
                            daysAmount={trainingDays?.length}
                            onChangeDiff={onChangeDiff}
                            onChangeGoal={onChangeGoal}
                            selectedProgramDifficultyId={selectedDiffId}
                            selectedProgramGoalId={selectedGoalId}
                            programGoals={programGoals}
                            programDifficulties={programDifficulties}
                            isLoading={isLoading}
                            onCancel={onCancel}
                            onChangeIsPublic={onChangeIsPublic}
                            isPublic={isPublic}
                            onSave={onSave}
                        />
                    </div>
                </div>
            )
    );
};
