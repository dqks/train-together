type ErrorKeys = 'name' |
    'selectedProgressionType' |
    'selectedPrimaryMuscleId' |
    'selectedEquipmentId' |
    'status'

export type ErrorObject = Partial<Record<ErrorKeys, string[]>>

export interface AddExerciseSchema {
    exerciseName: string
    progressionType: string
    primaryMuscleId: number | undefined
    equipmentId: number | undefined
    isLoading: boolean
    error: ErrorObject | undefined
}
