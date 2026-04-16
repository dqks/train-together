export interface CreateProgramSchema {
    name: string;
    description: string;
    publicSetting: 'all' | 'me';
    image: string | null
    error: string | undefined
    isLoading: boolean
}
