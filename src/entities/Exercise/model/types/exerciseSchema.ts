import type { Muscle } from '@/entities/Muscle/model/types/muscleSchema.ts';
import type { Equipment } from '@/entities/Equipment/model/types/equipmentSchema.ts';

export type ExerciseInformation = {
    id: number,
    name: string,
    image: string
    muscles: Muscle[]
}

export type ExerciseDetails = {
    id: number,
    imageUrl: string,
    name: string,
    image: string
    muscles: Muscle[]
    equipments: Equipment[]
}

export interface ExerciseSchema {
    exerciseCards: ExerciseInformation[] | null
    exerciseDetails: ExerciseDetails | null,
    myExercises: ExerciseInformation[] | null,
    isLoading: boolean
    error: string | undefined
}
