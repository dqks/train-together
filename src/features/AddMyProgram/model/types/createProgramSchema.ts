export type errorKeys = 'name' | 'description'

export type createProgramErrors = Record<errorKeys, string[]> | undefined

export interface CreateProgramSchema {
    name: string;
    description: string;
    publicSetting: 'all' | 'me';
    image: string | null
    errors: createProgramErrors
    isLoading: boolean
}
