import type { StateSchema } from '@/app/providers/StoreProvider';

export const getExerciseTypes = (state: StateSchema) => state.exerciseType.exerciseTypes;
