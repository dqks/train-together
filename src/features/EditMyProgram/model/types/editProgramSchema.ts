import type { ExerciseDay } from '@/entities/Program';

export type EditProgramErrorKeysInfo = 'name' | 'description' | 'image'
export type EditProgramErrorInfo = Partial<Record<EditProgramErrorKeysInfo, string[]> | null> | undefined

export type EditDaysInfo = {
    dayId: number
    dayOfWeekId: number
    name: string
    description: string | null
    exercises: ExerciseDay[]
}

export type ProgramMainInfo = {
    name: string | undefined
    description: string | null
    isPublic: boolean | undefined
    selectedGoalId: number | undefined
    selectedDiffId: number | undefined
}

export interface EditProgramSchema {
    daysInfo: EditDaysInfo[] | undefined
    programMainInfo: ProgramMainInfo 
    disableEdit: boolean
    errorDays: Partial<Record<'status', string[]>> | undefined
    errorProgramInfo: EditProgramErrorInfo
    isLoadingDays: boolean
    isLoadingPrograms: boolean
    sendUpdateDays: boolean
    sendUpdateProgramInfo: boolean
    selectedExerciseIds: number[]
    saveError: boolean
}

