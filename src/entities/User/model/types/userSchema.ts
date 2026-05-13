export type Profile = {
    id: number;
    email: string;
    nickname: string;
    avatarUrl: string | undefined;
    programCount: number;
}

export interface UserSchema {
    id: number | undefined;
    email: string | undefined;
    nickname: string | undefined;
    profileInfo: Profile | undefined
    error: string | undefined;
    isLoading: boolean
    _inited: boolean;
}
