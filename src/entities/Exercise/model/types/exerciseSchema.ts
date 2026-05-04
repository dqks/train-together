import type { Muscle } from '@/entities/Muscle/model/types/muscleSchema.ts';

export type ExerciseInformation = {
    id: number,
    name: string,
    image: string
    primaryMuscle: Muscle | undefined
    secondaryMuscles: Muscle[] | undefined
}

export type ExerciseDetails = {
    id: number | undefined,
    image: string,
    name: string,
    // muscles: Muscle[]
    // equipments: EquipmentFilter[]
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
