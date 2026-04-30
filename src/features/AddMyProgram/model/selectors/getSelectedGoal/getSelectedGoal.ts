import type { StateSchema } from '@/app/providers/StoreProvider';

export const getSelectedGoal = (state: StateSchema) => state.createProgram.selectedGoal;
