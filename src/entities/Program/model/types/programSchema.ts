export type ProgramCard = {
    id: number
    name: string
    description: string | undefined
    createdAt: Date
    imageUrl: string | null
    user: {
        id: number
        nickname: string
    }
}

export type ProgramDetails = {
    id: number
    name: string
    description: string | undefined
    imageUrl: string | null
    createdAt: Date
    isFollowed: boolean
    user: {
        id: number
        nickname: string
    }
}

export interface ProgramSchema {
    publicPrograms: ProgramCard[] | null
    userPrograms: ProgramCard[] | null
    programDetails: ProgramDetails | null
    favouritePrograms: ProgramCard[] | null
    error: string | undefined
    isLoading: boolean
}
