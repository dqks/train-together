import type { StateSchema } from '@/app/providers/StoreProvider';

export const getProgressionType = (state: StateSchema) => state.addExercise.progressionType;
