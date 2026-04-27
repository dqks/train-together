export type errorKeys = 'name' | 'description' | 'image'

export type createProgramErrors = Partial<Record<errorKeys, string[]>> | undefined

export interface CreateProgramSchema {
    name: string;
    description: string;
    publicSetting: 'true' | 'false';
    errors: createProgramErrors
    isLoading: boolean
}
