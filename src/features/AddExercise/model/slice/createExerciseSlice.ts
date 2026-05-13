import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AddExerciseSchema, errorObject } from '../types/addExerciseSchema.ts';
import { createUserExercise } from '../services/createExercise/createUserExercise.ts';

const initialState: AddExerciseSchema = {
    exerciseName: '',
    progressionType: 'default',
    equipmentId: undefined,
    primaryMuscleId: undefined,
    error: undefined,
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
        setEquipmentId: (state, action: PayloadAction<number>) => {
            state.equipmentId = action.payload;
        },
        setPrimaryMuscleId: (state, action: PayloadAction<number>) => {
            state.primaryMuscleId = action.payload;
        },
        setErrors: (state, action: PayloadAction<errorObject>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUserExercise.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(createUserExercise.fulfilled, (state) => {
                state.error = undefined;
                state.isLoading = false;
            })
            .addCase(createUserExercise.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: addExerciseActions } = createExerciseSlice;
export const { reducer: addExerciseReducer } = createExerciseSlice;
