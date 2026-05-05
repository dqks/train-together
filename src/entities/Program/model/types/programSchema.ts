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
    goal: string
    difficulty: string
    daysAmount: number | undefined
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
    }
}

export type Day = {
    id: number
    name: string
    description: string | undefined
    day: string,
    exercises: ExerciseDay[]
}

export type ProgramDetails = {
    id: number
    name: string
    description: string | undefined
    imageUrl: string | undefined
    createdAt: string
    isFollowed: boolean
    user: {
        id: number
        nickname: string
        programsCount: number
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
