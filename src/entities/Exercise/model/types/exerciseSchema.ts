export type ExerciseInformation = {
    id: number,
    name: string,
    image: string
    exerciseMuscles: []
}

export interface ExerciseSchema {
    exerciseCards: ExerciseInformation[] | null
    isLoading: boolean
    error: string | undefined
}
