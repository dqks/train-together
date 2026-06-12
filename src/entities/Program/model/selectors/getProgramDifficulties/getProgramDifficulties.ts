import type { StateSchema } from '@/app/providers/StoreProvider';

export const getProgramDifficulties = (state: StateSchema) => state.program.difficulties;
