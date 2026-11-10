// TODO добавить nameEng, пока не добавляем т.к. бекенд не возвращает и в бд нету
export type ExerciseProgression = {
    id: number
    name: string
}

export type ExerciseProgressionSchema = {
    exerciseProgressions: ExerciseProgression[] | null;
    error: string,
    isLoading: boolean,
}
