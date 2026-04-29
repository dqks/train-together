export type errorKeys = 'email' | 'password' | 'nickname' | 'consent'

export type errorsObject = Partial<Record<errorKeys, string[]>> | undefined

export interface RegisterSchema {
    email: string;
    password: string;
    nickname: string;
    consent: boolean;
    errors: errorsObject;
    isLoading: boolean;
}
