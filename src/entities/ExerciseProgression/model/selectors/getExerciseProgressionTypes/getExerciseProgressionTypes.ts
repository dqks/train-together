import type { StateSchema } from '@/app/providers/StoreProvider';

export const getExerciseProgressionTypes = (
    state: StateSchema,
) => state.exerciseProgression.exerciseProgressions;
