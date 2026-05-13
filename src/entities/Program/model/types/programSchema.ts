import type { Muscle } from '@/entities/Muscle/model/types/muscleSchema.ts';

export type ProgramCard = {
    id: number
    name: string
    description: string | undefined
    createdAt: Date
    imageUrl: string | undefined
    user: {
        id: number
        nickname: string
    }
    goal: {
        name: string
        nameEng: string
    }
    difficulty: {
        name: string
        nameEng: string
    }
    daysAmount: number | undefined
    followersCount: number | undefined
}

export type ExerciseDay = {
    id: number,
    sets: number,
    reps: number,
    exerciseOrder: number,
    exercise: {
        id: number,
        name: string,
        image: string,
        primaryMuscle: Muscle
    }
}

export type Day = {
    id: number
    name: string
    description: string | undefined
    day: {
        id: number
        name: string
    },
    exercises: ExerciseDay[]
}

export type Names = {
    name: string
    nameEng: string
}

export type ProgramDetails = {
    id: number
    name: string
    description: string | undefined
    imageUrl: string | undefined
    createdAt: string
    followsCount: number
    isFollowed: boolean
    goal: Names
    difficulty: Names
    user: {
        id: number
        nickname: string
        programsCount: number
        avatarUrl: string | undefined
    }
    days: Day[]
}

export type ProgramError = Record<string, string[]>

export interface ProgramSchema {
    publicPrograms: ProgramCard[] | null
    userPrograms: ProgramCard[] | null
    programDetails: ProgramDetails | null
    favouritePrograms: ProgramCard[] | null
    error: ProgramError | undefined
    isLoading: boolean
}
