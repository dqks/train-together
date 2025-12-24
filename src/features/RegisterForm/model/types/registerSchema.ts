export interface RegisterSchema {
    email: string;
    password: string;
    nickname: string;
    error: string | undefined;
    isLoading: boolean;
}
