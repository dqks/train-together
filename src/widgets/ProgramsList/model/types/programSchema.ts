export type Program = {
    id: number
    name: string
    description: string | null
    nickname: string
    public: boolean
}

export interface ProgramSchema {
    programList: Program[] | null
    error: string | undefined
    isLoading: boolean
}
