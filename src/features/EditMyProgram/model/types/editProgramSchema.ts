import type { Day } from '@/entities/Program';

export type EditProgramErrorKeysInfo = 'name' | 'description'
export type EditProgramErrorInfo = Partial<Record<EditProgramErrorKeysInfo, string[]>> | undefined

export interface EditProgramSchema {
    name: string | undefined
    disableEdit: boolean
    description: string | undefined
    isPublic: boolean | undefined
    trainingDays: Day[] | undefined
    selectedGoalId: number | undefined
    selectedDiffId: number | undefined
    errorDays: Partial<Record<'status', string[]>> | undefined
    errorProgramInfo: EditProgramErrorInfo
    isLoadingDays: boolean
    isLoadingPrograms: boolean
    sendUpdateDays: boolean
    sendUpdateProgramInfo: boolean
}
