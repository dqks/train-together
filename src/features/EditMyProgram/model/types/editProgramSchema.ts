import type { TrainingDay } from '@/entities/Program';

export type EditProgramErrorKeysInfo = 'name' | 'description' | 'image'
export type EditProgramErrorInfo = Partial<Record<EditProgramErrorKeysInfo, string[]> | null> | undefined

export type EditDaysInfo = {
    dayId: number
    name: string
    description: string
    exercises: {
            exerciseId: number
            sets: number
            reps: number
            exerciseOrder: number
    }[]
}

export type ProgramMainInfo = {
    name: string | undefined
    description: string | undefined
    isPublic: boolean | undefined
    selectedGoalId: number | undefined
    selectedDiffId: number | undefined
}

export interface EditProgramSchema {
    daysInfo: EditDaysInfo[]
    programMainInfo: ProgramMainInfo
    disableEdit: boolean
    trainingDays: TrainingDay[] | undefined
    errorDays: Partial<Record<'status', string[]>> | undefined
    errorProgramInfo: EditProgramErrorInfo
    isLoadingDays: boolean
    isLoadingPrograms: boolean
    sendUpdateDays: boolean
    sendUpdateProgramInfo: boolean
    selectedExerciseIds: number[]
    saveError: boolean
}

export interface ExerciseLinkState {
    programId: string | undefined
    from: 'edit'
}
