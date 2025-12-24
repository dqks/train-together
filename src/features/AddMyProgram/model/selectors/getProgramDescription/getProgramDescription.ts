import type { StateSchema } from '@/app/providers/StoreProvider';

export const getProgramDescription = (state: StateSchema) => state.createProgram.description;
