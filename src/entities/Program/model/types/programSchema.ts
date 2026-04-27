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
}

export type ProgramDetails = {
    id: number
    name: string
    description: string | undefined
    imageUrl: string | undefined
    createdAt: Date
    isFollowed: boolean
    user: {
        id: number
        nickname: string
    }
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
