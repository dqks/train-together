export type Muscle = {
    id: number;
    name: string;
    nameEng?: string;
}

export interface MuscleSchema {
    muscleList: Muscle[] | null;
    error: string | undefined
    isLoading: boolean
}
