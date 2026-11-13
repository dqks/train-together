import { createSlice } from '@reduxjs/toolkit';
import { fetchDaysOfWeek } from '../services/fetchDaysOfWeek/fetchDaysOfWeek.ts';
import type { DaysOfWeekSchema } from '../types/daysOfWeekSchema.ts';

const initialState: DaysOfWeekSchema = {
    error: undefined,
    isLoading: false,
    daysOfWeek: null,
};

export const daysOfWeekSlice = createSlice({
    name: 'program',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDaysOfWeek.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchDaysOfWeek.fulfilled, (state, action) => {
                state.isLoading = false;
                state.daysOfWeek = action.payload;
            })
            .addCase(fetchDaysOfWeek.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: daysOfWeekActions } = daysOfWeekSlice;
export const { reducer: daysOfWeekReducer } = daysOfWeekSlice;
