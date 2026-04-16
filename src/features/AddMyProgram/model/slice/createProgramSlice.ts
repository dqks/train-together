import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CreateProgramSchema } from '../types/createProgramSchema.ts';
import { createUserProgram } from '../services/createUserProgram/createUserProgram.ts';

const initialState: CreateProgramSchema = {
    name: '',
    description: '',
    publicSetting: 'all',
    image: null,
    error: '',
    isLoading: false,
};

export const createProgramSlice = createSlice({
    name: 'createProgram',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        setIsPublic: (state, action: PayloadAction<'all' | 'me'>) => {
            state.publicSetting = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUserProgram.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(createUserProgram.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(createUserProgram.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: createProgramActions } = createProgramSlice;
export const { reducer: createProgramReducer } = createProgramSlice;
