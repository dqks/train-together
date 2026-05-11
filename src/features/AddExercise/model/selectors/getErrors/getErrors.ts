import type { StateSchema } from '@/app/providers/StoreProvider';

export const getErrors = (state: StateSchema) => state.addExercise.error;
