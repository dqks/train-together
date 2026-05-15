import type { StateSchema } from '@/app/providers/StoreProvider';

export const getUserPrograms = (state: StateSchema) => state.profile.userPrograms;
