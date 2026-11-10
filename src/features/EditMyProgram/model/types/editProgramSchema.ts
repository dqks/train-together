import type { ExerciseDay } from '@/entities/Program';

export type EditProgramErrorKeysInfo = 'name' | 'description' | 'image'
export type EditProgramErrorInfo = Partial<Record<EditProgramErrorKeysInfo, string[]> | null> | undefined

export type EditProgramErrorDays = Partial<Record<string, string[]>> | undefined

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

export type ExerciseSelection = {
    selectedExercises: ExerciseDay[]
    selectedDayId: number | undefined
}

export interface EditProgramSchema {
    daysInfo: EditDaysInfo[] | undefined
    programMainInfo: ProgramMainInfo 
    exerciseSelection: ExerciseSelection
    disableEdit: boolean
    errorDays: EditProgramErrorDays
    errorProgramInfo: EditProgramErrorInfo
    isLoadingDays: boolean
    isLoadingPrograms: boolean
    sendUpdateDays: boolean
    sendUpdateProgramInfo: boolean
    savingResult: 'success' | 'error' | 'editing'
}

