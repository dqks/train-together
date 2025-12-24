export interface LoginSchema {
    email: string;
    password: string;
    error: string | undefined,
    isLoading: boolean,
}
