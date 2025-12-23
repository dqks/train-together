import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ExerciseCardInformation, ExerciseSchema } from '../types/exerciseSchema.ts';
import { fetchExerciseCards } from '@/entities/Exercise/model/services/fetchExerciseCards.ts';

const initialState: ExerciseSchema = {
    exerciseCards: null,
    error: '',
    isLoading: false,
};

export const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    reducers: {
        setExerciseCards: (state, action: PayloadAction<ExerciseCardInformation[]>) => {
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
            });
    },
});

export const { actions: exerciseActions } = exerciseSlice;
export const { reducer: exerciseReducer } = exerciseSlice;
