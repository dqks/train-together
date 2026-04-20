import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ExerciseType, ExerciseTypeSchema } from '../types/exerciseTypeSchema.ts';

const initialState: ExerciseTypeSchema = {
    exerciseTypes: null,
};

export const exerciseTypeSlice = createSlice({
    name: 'exerciseType',
    initialState,
    reducers: {
        setExerciseTypes(state, action: PayloadAction<ExerciseType[]>) {
            state.exerciseTypes = action.payload;
        },
    },
    // extraReducers: (builder) => {},
});

export const { actions: exerciseTypeActions } = exerciseTypeSlice;
export const { reducer: exerciseTypeReducer } = exerciseTypeSlice;
