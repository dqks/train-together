export type RegisterErrorKeys = 'email' | 'password' | 'nickname' | 'consent'

export type RegisterErrorsObject = Partial<Record<RegisterErrorKeys, string[]>> | undefined

export interface RegisterSchema {
    email: string;
    password: string;
    nickname: string;
    consent: boolean;
    errors: RegisterErrorsObject;
    isLoading: boolean;
}
