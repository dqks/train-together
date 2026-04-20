import type { StateSchema } from '@/app/providers/StoreProvider';

export const getExerciseName = (state: StateSchema) => state.addExercise.exerciseName;
