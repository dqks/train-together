import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
    ExerciseProgression,
    ExerciseProgressionSchema,
} from '../types/exerciseProgressionSchema.ts';
import {
    fetchProgressionTypes,
} from '../services/fetchProgressionTypes/fetchProgressionTypes.ts';

const initialState: ExerciseProgressionSchema = {
    exerciseProgressions: null,
    error: '',
    isLoading: false,
};

export const exerciseProgressionSlice = createSlice({
    name: 'exerciseProgression',
    initialState,
    reducers: {
        setExerciseTypes(state, action: PayloadAction<ExerciseProgression[]>) {
            state.exerciseProgressions = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProgressionTypes.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchProgressionTypes.fulfilled, (state, action) => {
                state.exerciseProgressions = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProgressionTypes.rejected, (state) => {
                state.error = 'Something went wrong';
                state.isLoading = false;
            });
    },
});

export const { actions: exerciseProgressionActions } = exerciseProgressionSlice;
export const { reducer: exerciseProgressionReducer } = exerciseProgressionSlice;
