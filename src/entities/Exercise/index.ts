import { ExerciseCard } from './ui/ExerciseCard/ExerciseCard.tsx';
import { ExerciseInProgram } from './ui/ExerciseInProgram/ExerciseInProgram.tsx';
import type {
    ExerciseSchema, ExerciseDetails, ListItem, Exercise, ExerciseDetailsSchema, MyExerciseSchema
} from './model/types/exerciseSchema.ts';
import { exerciseReducer, exerciseActions } from './model/slice/exerciseSlice.ts';
import { exerciseDetailsReducer, exerciseDetailsActions } from './model/slice/exerciseDetailsSlice.ts';
import { myExerciseReducer, myExerciseActions } from './model/slice/myExercisesSlice.ts';
import { fetchExerciseDetails } from './model/services/fetchExerciseDetails/fetchExerciseDetails.ts';
import { fetchExerciseCards } from './model/services/fetchExerciseCards/fetchExerciseCards.ts';

export {
    getExerciseDetailsError,
    getExerciseDetailsIsLoading,
    getExerciseError,
    getExerciseIsLoading,
    getExerciseDetails,
    getMyExerciseError,
    getMyExerciseIsLoading,
    getMyExercises
} from "./model/selectors/exerciseSelectors.ts" 

export { getAllExercises, getTotalExercises, getExerciseById } from "./model/slice/exerciseSlice.ts"

export {
    ExerciseCard,
    ExerciseInProgram,
    exerciseReducer,
    exerciseActions,
    fetchExerciseDetails,
    fetchExerciseCards,
    exerciseDetailsActions,
    exerciseDetailsReducer,
    myExerciseActions,
    myExerciseReducer,
};

export type {
    ExerciseSchema,
    ExerciseDetails,
    ListItem,
    Exercise,
    ExerciseDetailsSchema,
    MyExerciseSchema
};
