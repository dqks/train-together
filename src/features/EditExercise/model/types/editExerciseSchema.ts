type errorKeys = 'name' |
    'exerciseProgressionTypeId' |
    'primaryMuscleId' |
    'secondaryMuscleIds' |
    'equipmentId'

export type ErrorObjectState = Partial<Record<errorKeys, string[]>>

export interface EditExerciseSchema {
    name: string
    equipmentId: string
    primaryMuscleId: string
    secondaryMuscleIds: string[]
    errors: ErrorObjectState
}

export interface EditExerciseInit {
    name: string
    equipmentId: string
    primaryMuscleId: string
    secondaryMuscleIds: string[]
}