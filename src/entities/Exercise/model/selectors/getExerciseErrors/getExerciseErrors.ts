import type { StateSchema } from '@/app/providers/StoreProvider';

export const getExerciseErrors = (state: StateSchema) => state.exercise.error;
