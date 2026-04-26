import type { StateSchema } from '@/app/providers/StoreProvider';

export const getMyExercises = (state: StateSchema) => state.exercise.myExercises;
