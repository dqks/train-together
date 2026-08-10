export interface UserSchema {
    id: number | undefined;
    email: string | undefined;
    nickname: string | undefined;
    error: string | undefined;
    isLoading: boolean
    _inited: boolean;
}
