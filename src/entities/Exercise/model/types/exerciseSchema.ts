export type ExerciseCardInformation = {
    id: number,
    name: string,
}

export interface ExerciseSchema {
    exerciseCards: ExerciseCardInformation[] | null
    isLoading: boolean
    error: string | undefined
}
