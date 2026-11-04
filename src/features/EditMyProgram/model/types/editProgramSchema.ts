import type { TrainingDay } from '@/entities/Program';

export type EditProgramErrorKeysInfo = 'name' | 'description' | 'image'
export type EditProgramErrorInfo = Partial<Record<EditProgramErrorKeysInfo, string[]> | null> | undefined

export interface EditProgramSchema {
    name: string | undefined
    disableEdit: boolean
    description: string | undefined
    isPublic: boolean | undefined
    trainingDays: TrainingDay[] | undefined
    selectedGoalId: number | undefined
    selectedDiffId: number | undefined
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
