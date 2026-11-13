import { createSlice } from '@reduxjs/toolkit';
import type { ProgramSchema } from '../types/programSchema.ts';
import { fetchCreateInfo } from '../services/fetchCreateInfo/fetchCreateInfo.ts';

const initialState: ProgramSchema = {
    error: undefined,
    isLoading: false,
    goals: undefined,
    difficulties: undefined,
};

export const programsSlice = createSlice({
    name: 'program',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCreateInfo.pending, (state) => {
                // state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCreateInfo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.difficulties = action.payload.difficulties;
                state.goals = action.payload.goals;
            })
            .addCase(fetchCreateInfo.rejected, (state) => {
                state.isLoading = false;
                // state.errors = action.payload;
            })
    },
});

export const { actions: programsActions } = programsSlice;
export const { reducer: programsReducer } = programsSlice;
