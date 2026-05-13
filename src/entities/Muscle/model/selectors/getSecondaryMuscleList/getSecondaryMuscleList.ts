import type { StateSchema } from '@/app/providers/StoreProvider';

export const getSecondaryMuscleList = (state: StateSchema) => state.muscle.secondaryMuscleList;
