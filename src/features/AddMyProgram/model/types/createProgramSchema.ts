export type errorKeys = 'name' | 'description' | 'image' | 'goalId' | 'diffId'

export type createProgramErrors = Partial<Record<errorKeys, string[]>>

export interface CreateProgramSchema {
    name: string;
    description: string;
    publicSetting: 'true' | 'false';
    selectedGoal: string;
    selectedDifficulty: string;
    errors: createProgramErrors | undefined;
    isLoading: boolean
}
