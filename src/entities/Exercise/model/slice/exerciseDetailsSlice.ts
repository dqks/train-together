import { createSlice } from '@reduxjs/toolkit';
import type { ExerciseDetailsSchema } from '../types/exerciseSchema.ts';
import { fetchExerciseDetails } from '../services/fetchExerciseDetails/fetchExerciseDetails.ts';

const initialState: ExerciseDetailsSchema = {
    exerciseDetails: null,
    error: undefined,
    isLoading: false,
};

export const exerciseDetailsSlice = createSlice({
    name: 'exerciseDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchExerciseDetails.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                console.log("exerciseDetails pending");
                
            })
            .addCase(fetchExerciseDetails.fulfilled, (state, action) => {
                console.log("exerciseDetails fulfilled");

                state.isLoading = false;
                state.exerciseDetails = action.payload;
            })
            .addCase(fetchExerciseDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
});

export const { actions: exerciseDetailsActions } = exerciseDetailsSlice;
export const { reducer: exerciseDetailsReducer } = exerciseDetailsSlice;
