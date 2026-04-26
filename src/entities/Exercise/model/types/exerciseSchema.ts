import type { Muscle } from '@/entities/Muscle/model/types/muscleSchema.ts';

export type ExerciseInformation = {
    id: number,
    name: string,
    image: string
    muscles: Muscle[]
}

export type ExerciseDetails = {
    id: number | undefined,
    imageUrl: string,
    name: string,
    image: string
    // muscles: Muscle[]
    // equipments: Equipment[]
    userId: number | null
}

export type ExerciseError = Record<string, string[]>

export interface ExerciseSchema {
    exerciseCards: ExerciseInformation[] | null
    exerciseDetails: ExerciseDetails | null,
    myExercises: ExerciseInformation[] | null,
    isLoading: boolean
    error: ExerciseError | undefined
}
