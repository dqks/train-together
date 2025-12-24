import { createSlice } from '@reduxjs/toolkit';
import type { MuscleSchema } from '../types/muscleSchema.ts';
import { fetchMuscleList } from '../services/fetchMuscleList/fetchMuscleList.ts';

const initialState: MuscleSchema = {
    muscleList: null,
    error: undefined,
    isLoading: false,
};

export const muscleSlice = createSlice({
    name: 'muscle',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMuscleList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchMuscleList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.muscleList = action.payload;
            })
            .addCase(fetchMuscleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: muscleActions } = muscleSlice;
export const { reducer: muscleReducer } = muscleSlice;
