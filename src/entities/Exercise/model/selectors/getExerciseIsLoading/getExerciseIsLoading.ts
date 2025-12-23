import type { StateSchema } from '@/app/providers/StoreProvider';

export const getExerciseIsLoading = (state: StateSchema) => state.exercise.isLoading;
