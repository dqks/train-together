import { createSlice } from '@reduxjs/toolkit';
import type { MyExerciseSchema, } from '../types/exerciseSchema.ts';
import { fetchMyExercises } from '@/entities/Exercise/model/services/fecthMyExercises/fecthMyExercises.ts';

const initialState: MyExerciseSchema = {
    myExercises: undefined,
    error: undefined,
    isLoading: false,
};

export const myExerciseSlice = createSlice({
    name: 'myExercise',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
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

export const { actions: myExerciseActions } = myExerciseSlice;
export const { reducer: myExerciseReducer } = myExerciseSlice;
