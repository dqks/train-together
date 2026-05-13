import type { StateSchema } from '@/app/providers/StoreProvider';

export const getPrimaryMuscleId = (state: StateSchema) => state.addExercise.primaryMuscleId;
