import type { StateSchema } from '@/app/providers/StoreProvider';

export const getPublicPrograms = (state: StateSchema) => state.program.publicPrograms;
