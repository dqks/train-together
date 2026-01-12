import type { StateSchema } from '@/app/providers/StoreProvider';

export const getMuscleList = (state: StateSchema) => state.muscle.muscleList;
