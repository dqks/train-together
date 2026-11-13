type errorKeys = 'name' |
    'exerciseProgressionTypeId' |
    'primaryMuscleId' |
    'secondaryMuscleIds' |
    'equipmentId' |
    'image'

export type ErrorObjectState = Partial<Record<errorKeys, string[]>> | undefined

export interface EditExerciseSchema {
    name: string
    equipmentId: string
    primaryMuscleId: string
    secondaryMuscleIds: string[]
    errors: ErrorObjectState
    userId: number
    imageUrl: string
    status: 'loading' | 'success' | 'editing'
}
