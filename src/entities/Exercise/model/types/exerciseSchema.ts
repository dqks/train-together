import type { Muscle } from '@/entities/Muscle/model/types/muscleSchema.ts';
import type { Equipment } from '@/entities/Equipment/model/types/equipmentSchema.ts';

export type ExerciseInformation = {
    id: number,
    name: string,
    image: string
    primaryMuscle: Muscle | undefined
    secondaryMuscles: Muscle[] | undefined
}

export type ListItem = {
   text: string,
   order: number
}

export type ExerciseDetails = {
    id: number | undefined,
    image: string,
    name: string,
    advice: ListItem[] | undefined
    technique: ListItem[] | undefined
    description: string
    userId: number | null
    equipment: Equipment
    primaryMuscle: Muscle
    secondaryMuscles: Muscle[]
}

export type ExerciseError = Record<string, string[]>

export interface ExerciseSchema {
    exerciseCards: ExerciseInformation[] | undefined
    exerciseDetails: ExerciseDetails | null,
    myExercises: ExerciseInformation[] | null,
    isLoading: boolean
    error: ExerciseError | undefined
}
