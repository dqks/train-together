// TODO добавить nameEng
export type ExerciseProgression = {
    id: number
    name: string
}

export type ExerciseProgressionSchema = {
    exerciseProgressions: ExerciseProgression[] | null;
    error: string,
    isLoading: boolean,
}
