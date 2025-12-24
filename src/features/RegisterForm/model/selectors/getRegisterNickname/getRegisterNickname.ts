import type { StateSchema } from '@/app/providers/StoreProvider';

export const getRegisterNickname = (state: StateSchema) => state.register.nickname;
