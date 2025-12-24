import type { StateSchema } from '@/app/providers/StoreProvider';

export const getUserNickname = (state: StateSchema) => state.user.nickname;
