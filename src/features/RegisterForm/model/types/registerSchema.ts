export type errorKeys = 'email' | 'password' | 'nickname'

export interface RegisterSchema {
    email: string;
    password: string;
    nickname: string;
    errors: Record<errorKeys, string[]>| undefined;
    isLoading: boolean;
}
