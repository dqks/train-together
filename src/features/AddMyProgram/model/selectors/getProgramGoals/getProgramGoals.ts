import type { StateSchema } from '@/app/providers/StoreProvider';

export const getProgramGoals = (state: StateSchema) => state.createProgram.goals;
