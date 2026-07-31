export type ErrorKeys = 'name' | 'description' | 'image' | 'goalId' | 'diffId'

export type CreateProgramErrors = Partial<Record<ErrorKeys, string[]>>

export interface CreateProgramSchema {
    name: string;
    description: string;
    publicSetting: 'true' | 'false';
    selectedGoal: string;
    selectedDifficulty: string;
    errors: CreateProgramErrors | undefined;
    isLoading: boolean
}
