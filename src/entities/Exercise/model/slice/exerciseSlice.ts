import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ExerciseInformation, ExerciseSchema } from '../types/exerciseSchema.ts';
import { fetchExerciseCards } from '../services/fetchExerciseCards/fetchExerciseCards.ts';
import { fetchExerciseDetails } from '../services/fetchExerciseDetails/fetchExerciseDetails.ts';
import { fetchMyExercises } from '@/entities/Exercise/model/services/fecthMyExercises/fecthMyExercises.ts';

const initialState: ExerciseSchema = {
    exerciseCards: null,
    exerciseDetails: null,
    myExercises: null,
    error: undefined,
    isLoading: false,
};

export const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    reducers: {
        setExerciseCards: (state, action: PayloadAction<ExerciseInformation[]>) => {
            state.exerciseCards = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExerciseCards.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchExerciseCards.fulfilled, (state, action) => {
                state.isLoading = false;
                state.exerciseCards = action.payload;
            })
            .addCase(fetchExerciseCards.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchExerciseDetails.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchExerciseDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.exerciseDetails = action.payload;
            })
            .addCase(fetchExerciseDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchMyExercises.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchMyExercises.fulfilled, (state, action) => {
                state.isLoading = false;
                state.myExercises = action.payload;
            })
            .addCase(fetchMyExercises.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: exerciseActions } = exerciseSlice;
export const { reducer: exerciseReducer } = exerciseSlice;
