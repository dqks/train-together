import type { Muscle } from '@/entities/Muscle/model/types/muscleSchema.ts';

export type ExerciseInformation = {
    id: number,
    name: string,
    image: string
    muscles: Muscle[]
}

export interface ExerciseSchema {
    exerciseCards: ExerciseInformation[] | null
    isLoading: boolean
    error: string | undefined
}
