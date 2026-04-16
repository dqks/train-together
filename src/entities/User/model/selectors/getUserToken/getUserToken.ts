import type { StateSchema } from '@/app/providers/StoreProvider';

export const getUserToken = (state: StateSchema) => state.user.token;
