export type errorKeys = 'name' | 'description' | 'image' | 'goalId' | 'diffId'

export type createProgramErrors = Partial<Record<errorKeys, string[]>>

type Goal = {
    id: number
    name: string
    nameEng: string
    sortOrder: number
}

type Difficulty = {
    id: number
    name: string
    nameEng: string
    level: number
}

export type CreateInfo = {
    goals: Goal[]
    difficulties: Difficulty[]
}

export interface CreateProgramSchema {
    name: string;
    description: string;
    publicSetting: 'true' | 'false';
    goals: Goal[] | undefined;
    difficulties: Difficulty[] | undefined;
    selectedGoal: string;
    selectedDifficulty: string;
    errors: createProgramErrors | undefined;
    isLoading: boolean
}
