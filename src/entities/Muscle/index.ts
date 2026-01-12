import { MuscleFilterList } from './ui/MuscleFilterList/MuscleFilterList.tsx';
import type { MuscleSchema } from '@/entities/Muscle/model/types/muscleSchema.ts';
import { muscleReducer } from '@/entities/Muscle/model/slice/muscleSlice.ts';

export { MuscleFilterList, muscleReducer };
export type { MuscleSchema };
