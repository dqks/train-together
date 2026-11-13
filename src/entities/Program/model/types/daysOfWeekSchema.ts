import type { DayOfWeek, ProgramError } from "./programSchema"

export interface DaysOfWeekSchema {
    error: ProgramError | undefined
    isLoading: boolean
    daysOfWeek: DayOfWeek[] | null
}
