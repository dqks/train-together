import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ProgramDetails, ProgramSchema } from '../types/programSchema.ts';
import { fetchPublicPrograms } from '../services/fetchPublicPrograms/fetchPublicPrograms.ts';
import { fetchUserPrograms } from '../services/fetchUserPrograms/fetchUserPrograms.ts';
import { fetchProgramDetails } from '../services/fetchProgramDetails/fetchProgramDetails.ts';
import {
    fetchFavouritePrograms,
} from '../services/fetchFavouritePrograms/fetchFavouritePrograms.ts';
import { fetchCreateInfo } from '../services/fetchCreateInfo/fetchCreateInfo.ts';
import { fetchDaysOfWeek } from '../services/fetchDaysOfWeek/fetchDaysOfWeek.ts';

const initialState: ProgramSchema = {
    publicPrograms: null,
    userPrograms: null,
    programDetails: null,
    favouritePrograms: null,
    error: undefined,
    isLoading: false,
    goals: undefined,
    difficulties: undefined,
    daysOfWeek: null,
};

export const programsSlice = createSlice({
    name: 'program',
    initialState,
    reducers: {
        setProgramDetails: (state, action: PayloadAction<ProgramDetails | null>) => {
            state.programDetails = action.payload;
        },
        setProgramDetailsIsFollowed: (state, action: PayloadAction<boolean>) => {
            if (state?.programDetails) {
                state.programDetails.isFollowed = action.payload;
            }
        },
    },
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
            .addCase(fetchProgramDetails.pending, (state, action) => {
                state.isLoading = true;
                state.error = action.payload;
            })
            .addCase(fetchProgramDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchProgramDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.programDetails = action.payload;
            })
            .addCase(fetchFavouritePrograms.pending, (state, action) => {
                state.isLoading = true;
                state.error = action.payload;
            })
            .addCase(fetchFavouritePrograms.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchFavouritePrograms.fulfilled, (state, action) => {
                state.isLoading = false;
                state.favouritePrograms = action.payload;
            })
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

export const { actions: programsActions } = programsSlice;
export const { reducer: programsReducer } = programsSlice;
