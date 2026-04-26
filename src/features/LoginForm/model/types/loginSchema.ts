export type loginErrors = Partial<Record<string, string>> | undefined

export interface LoginSchema {
    email: string;
    password: string;
    error: loginErrors,
    isLoading: boolean,
}
