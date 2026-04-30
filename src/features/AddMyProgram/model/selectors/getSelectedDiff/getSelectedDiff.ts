import type { StateSchema } from '@/app/providers/StoreProvider';

export const getSelectedDiff = (state: StateSchema) => state.createProgram.selectedDifficulty;
