import type { StateSchema } from '@/app/providers/StoreProvider';

export const getPrimaryMuscleList = (state: StateSchema) => state.muscle.primaryMuscleList;
