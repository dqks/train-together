import { ExerciseCard } from './ui/ExerciseCard/ExerciseCard.tsx';
import { ExerciseInProgram } from './ui/ExerciseInProgram/ExerciseInProgram.tsx';
import type { ExerciseSchema } from './model/types/exerciseSchema.ts';
import { exerciseReducer, exerciseActions } from './model/slice/exerciseSlice.ts';
import { getExerciseCards } from './model/selectors/getExerciseCards/getExerciseCards.ts';
import {
    getExerciseIsLoading,
} from './model/selectors/getExerciseIsLoading/getExerciseIsLoading.ts';
import {
    getExerciseDetails,
} from './model/selectors/getExerciseDetails/getExerciseDetails.ts';
import { fetchExerciseDetails } from './model/services/fetchExerciseDetails/fetchExerciseDetails.ts';

export {
    ExerciseCard,
    ExerciseInProgram,
    exerciseReducer,
    exerciseActions,
    getExerciseCards,
    getExerciseIsLoading,
    fetchExerciseDetails,
    getExerciseDetails,
};

export type {
    ExerciseSchema,
};
