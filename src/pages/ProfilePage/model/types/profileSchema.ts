import type { ProgramCard } from '@/entities/Program/model/types/programSchema.ts';

export type Profile = {
    id: number;
    email: string;
    nickname: string;
    avatarUrl: string | undefined;
    programCount: number;
}

export type ProfileSchema = {
    userPrograms: ProgramCard[] | undefined
    profileInfo: Profile | undefined
    ratedPrograms: ProgramCard[] | undefined
    error: string | undefined
    isLoading: boolean
    isInitializing: boolean
}
