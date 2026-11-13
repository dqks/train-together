import type { ProgramCard, ProgramError } from "./programSchema"

export interface FavouriteProgramSchema {
    favouritePrograms: ProgramCard[] | null
    error: ProgramError | undefined
    isLoading: boolean
}