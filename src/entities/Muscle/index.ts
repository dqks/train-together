import { PrimaryMuscleCardList } from '@/entities/Muscle/ui/PrimaryMuscleCardList/PrimaryMuscleCardList.tsx';
import type { MuscleSchema, Muscle } from '@/entities/Muscle/model/types/muscleSchema.ts';
import { muscleReducer } from '@/entities/Muscle/model/slice/muscleSlice.ts';
import { PrimaryMuscleCard } from '@/entities/Muscle/ui/PrimaryMuscleCard/PrimaryMuscleCard.tsx';
import { SecondaryMuscleCardList } from './ui/SecondaryMuscleCardList/SecondaryMuscleCardList.tsx';
import { fetchMuscleList } from './model/services/fetchMuscleList/fetchMuscleList.ts';
import { getPrimaryMuscleList } from './model/selectors/getPrimaryMuscleList/getPrimaryMuscleList.ts';

export {
    PrimaryMuscleCardList,
    muscleReducer,
    PrimaryMuscleCard,
    SecondaryMuscleCardList,
    fetchMuscleList,
    getPrimaryMuscleList,
};
export type { MuscleSchema, Muscle };
