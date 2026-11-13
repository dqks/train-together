import { createSlice } from '@reduxjs/toolkit';
import { fetchUserPrograms } from '../services/fetchUserPrograms/fetchUserPrograms.ts';

import type { UserProgramsSchema } from '../types/userProgramsSchema.ts';

const initialState: UserProgramsSchema = {
    userPrograms: null,
    error: undefined,
    isLoading: false,
};

export const userProgramsSlice = createSlice({
    name: 'program',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserPrograms.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchUserPrograms.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userPrograms = action.payload;
            })
            .addCase(fetchUserPrograms.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
});

export const { actions: userProgramsActions } = userProgramsSlice;
export const { reducer: userProgramsReducer } = userProgramsSlice;