import type { StateSchema } from '@/app/providers/StoreProvider';

export const getProgramName = (state: StateSchema) => state.createProgram.name;
