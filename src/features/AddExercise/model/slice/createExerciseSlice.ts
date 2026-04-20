import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AddExerciseSchema } from '../types/addExerciseSchema.ts';
import { createUserExercise } from '../services/createExercise/createUserExercise.ts';

const initialState: AddExerciseSchema = {
    exerciseName: '',
    progressionType: 'null',
    equipments: [],
    muscles: [],
    error: '',
    isLoading: false,
};

export const createExerciseSlice = createSlice({
    name: 'createExercise',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.exerciseName = action.payload;
        },
        setProgressionType: (state, action: PayloadAction<string>) => {
            state.progressionType = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUserExercise.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            });
        builder
            .addCase(createUserExercise.fulfilled, (state) => {
                state.error = undefined;
                state.isLoading = false;
            });
        builder
            .addCase(createUserExercise.rejected, (state) => {
                state.error = 'Error occurred';
                state.isLoading = false;
            });
    },
});

export const { actions: addExerciseActions } = createExerciseSlice;
export const { reducer: addExerciseReducer } = createExerciseSlice;
