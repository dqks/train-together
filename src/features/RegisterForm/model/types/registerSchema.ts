export type errorKeys = 'email' | 'password' | 'nickname'

export type errorsObject = Partial<Record<errorKeys, string[]>> | undefined

export interface RegisterSchema {
    email: string;
    password: string;
    nickname: string;
    errors: errorsObject;
    isLoading: boolean;
}
