import type { StateSchema } from '@/app/providers/StoreProvider';

export const getUserEmail = (state: StateSchema) => state.user.email;
