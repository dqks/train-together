import type { Day } from "@/entities/Program"

export interface EditProgramSchema {
    name: string | undefined
    description: string | undefined
    isPublic: boolean | undefined
    trainingDays: Day[] | undefined
    selectedGoalId: number | undefined
    selectedDiffId: number | undefined 
}