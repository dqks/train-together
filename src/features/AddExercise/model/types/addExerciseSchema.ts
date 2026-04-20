import type { Muscle } from '@/entities/Muscle/model/types/muscleSchema.ts';
import type { Equipment } from '@/entities/Equipment/model/types/equipmentSchema.ts';

export interface AddExerciseSchema {
    exerciseName: string
    progressionType: string
    muscles?: Muscle[]
    equipments?: Equipment[]
    isLoading: boolean
    error: string | undefined
}
