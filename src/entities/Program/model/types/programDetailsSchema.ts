import type { ProgramDetails, ProgramError } from "./programSchema"

export interface ProgramDetailsSchema {
    programDetails: ProgramDetails | null
    error: ProgramError | undefined
    isLoading: boolean
}