import { PrimaryMuscleCardList } from '@/entities/Muscle/ui/PrimaryMuscleCardList/PrimaryMuscleCardList.tsx';
import type { MuscleSchema } from '@/entities/Muscle/model/types/muscleSchema.ts';
import { muscleReducer } from '@/entities/Muscle/model/slice/muscleSlice.ts';
import { PrimaryMuscleCard } from '@/entities/Muscle/ui/PrimaryMuscleCard/PrimaryMuscleCard.tsx';
import { SecondaryMuscleCardList } from './ui/SecondaryMuscleCardList/SecondaryMuscleCardList.tsx';

export {
    PrimaryMuscleCardList, muscleReducer, PrimaryMuscleCard, SecondaryMuscleCardList,
};
export type { MuscleSchema };
