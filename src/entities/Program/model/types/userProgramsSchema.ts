import type { ProgramCard, ProgramError } from "./programSchema"

export interface UserProgramsSchema {
    userPrograms: ProgramCard[] | null
    error: ProgramError | undefined
    isLoading: boolean
}
