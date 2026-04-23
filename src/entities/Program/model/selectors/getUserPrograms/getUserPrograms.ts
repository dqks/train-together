import type { StateSchema } from '@/app/providers/StoreProvider';

export const getUserPrograms = (state: StateSchema) => state.program.userPrograms;
