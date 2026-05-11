type errorKeys = 'name' |
    'selectedProgressionType' |
    'selectedPrimaryMuscleId' |
    'selectedEquipmentId' |
    'status'

export type errorObject = Partial<Record<errorKeys, string[]>>

export interface AddExerciseSchema {
    exerciseName: string
    progressionType: string
    primaryMuscleId: number | undefined
    equipmentId: number | undefined
    isLoading: boolean
    error: errorObject | undefined
}
