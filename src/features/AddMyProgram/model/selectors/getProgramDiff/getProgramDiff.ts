import type { StateSchema } from '@/app/providers/StoreProvider';

export const getProgramDiff = (state: StateSchema) => state.createProgram.difficulties;
