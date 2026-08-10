export type LoginErrors = Partial<Record<'status', string[]>> | undefined

export interface LoginSchema {
    email: string;
    password: string;
    error: LoginErrors,
    isLoading: boolean,
}
