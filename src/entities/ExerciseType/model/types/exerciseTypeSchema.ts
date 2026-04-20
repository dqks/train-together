// TODO добавить nameEng
export type ExerciseType = {
    id: number
    name: string
}

export type ExerciseTypeSchema = {
    exerciseTypes: ExerciseType[] | null;
};
