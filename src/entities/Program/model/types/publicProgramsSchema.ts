import type { ProgramCard, ProgramError } from "./programSchema"

export type PublicProramSchema = {
    publicPrograms: ProgramCard[] | null
    error: ProgramError | undefined
    isLoading: boolean
}