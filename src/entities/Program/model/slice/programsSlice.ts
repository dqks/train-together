import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ProgramDetails, ProgramSchema } from '../types/programSchema.ts';
import { fetchPublicPrograms } from '../services/fetchPublicPrograms/fetchPublicPrograms.ts';
import { fetchUserPrograms } from '../services/fetchUserPrograms/fetchUserPrograms.ts';
import { fetchProgramDetails } from '../services/fetchProgramDetails/fetchProgramDetails.ts';

const initialState: ProgramSchema = {
    publicPrograms: null,
    userPrograms: null,
    programDetails: null,
    error: '',
    isLoading: false,
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
            });
    },
});

export const { actions: programsActions } = programsSlice;
export const { reducer: programsReducer } = programsSlice;
