export interface LoginSchema {
    email: string;
    password: string;
    error: Record<string, string> | undefined,
    isLoading: boolean,
}
