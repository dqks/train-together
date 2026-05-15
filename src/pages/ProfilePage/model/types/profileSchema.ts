import type { ProgramCard } from '@/entities/Program/model/types/programSchema.ts';

export type ProfileSchema = {
    userPrograms: ProgramCard[] | undefined
    ratedPrograms: ProgramCard[] | undefined
    error: string |undefined
    isLoading: boolean
}
