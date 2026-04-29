import type { StateSchema } from '@/app/providers/StoreProvider';

export const getRegisterConsent = (state: StateSchema) => state.register.consent;
