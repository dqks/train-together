import { createSlice } from "@reduxjs/toolkit";
import { fetchPublicPrograms } from "../services/fetchPublicPrograms/fetchPublicPrograms";
import type { PublicProramSchema } from "../types/publicProgramsSchema";

const initialState: PublicProramSchema = {
    publicPrograms: null,
    error: undefined,
    isLoading: false,
};

export const publicProgramsSlice = createSlice({
    name: 'program',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPublicPrograms.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPublicPrograms.fulfilled, (state, action) => {
                state.isLoading = false;
                state.publicPrograms = action.payload;
            })
            .addCase(fetchPublicPrograms.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
});

export const { actions: publicProgramsActions } = publicProgramsSlice;
export const { reducer: publicProgramsReducer } = publicProgramsSlice;