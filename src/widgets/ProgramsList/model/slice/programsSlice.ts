import { createSlice } from '@reduxjs/toolkit';
import type { ProgramSchema } from '../types/programSchema.ts';
import { fetchProgramList } from '../services/fetchProgramList/fetchProgramList.ts';
import {
    fetchUserProgramList,
} from '@/widgets/ProgramsList/model/services/fetchUserProgramList/fetchUserProgramList.ts';

const initialState: ProgramSchema = {
    programList: null,
    error: '',
    isLoading: false,
};

export const programsSlice = createSlice({
    name: 'programs',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProgramList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProgramList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.programList = action.payload;
            })
            .addCase(fetchProgramList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchUserProgramList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchUserProgramList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.programList = action.payload;
            })
            .addCase(fetchUserProgramList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: programsActions } = programsSlice;
export const { reducer: programsReducer } = programsSlice;
