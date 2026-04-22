import type { StateSchema } from '@/app/providers/StoreProvider';

export const getExerciseDetails = (state:StateSchema) => state.exercise.exerciseDetails;
