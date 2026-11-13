import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ProgramDetails } from '../types/programSchema.ts';
import { fetchProgramDetails } from '../services/fetchProgramDetails/fetchProgramDetails.ts';
import type { ProgramDetailsSchema } from '../types/programDetailsSchema.ts';

const initialState: ProgramDetailsSchema = {
    programDetails: null,
    error: undefined,
    isLoading: false,
};

export const programsDetailsSlice = createSlice({
    name: 'programDetails',
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
    },
});

export const { actions: programsDetailsActions } = programsDetailsSlice;
export const { reducer: programsDetailsReducer } = programsDetailsSlice;
