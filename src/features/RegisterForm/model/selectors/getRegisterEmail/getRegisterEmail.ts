import type { StateSchema } from '@/app/providers/StoreProvider';

export const getRegisterEmail = (state: StateSchema) => state.register.email;
