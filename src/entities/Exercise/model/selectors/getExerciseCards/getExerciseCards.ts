import type { StateSchema } from '@/app/providers/StoreProvider';

export const getExerciseCards = (state: StateSchema) => state.exercise.exerciseCards;
