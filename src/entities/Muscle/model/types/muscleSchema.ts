export type Muscle = {
    id: number;
    name: string;
    nameEng?: string;
}

export type SecondaryMuscle = Muscle & {
    checkBoxValue: string
}

export interface MuscleSchema {
    primaryMuscleList: Muscle[] | null;
    secondaryMuscleList: SecondaryMuscle[] | null;
    error: string | undefined
    isLoading: boolean
}

export interface MuscleCardProps {
    className?: string;
    name?: string | undefined
    // id: number | undefined
}
