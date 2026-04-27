import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { createProgramErrors, CreateProgramSchema } from '../types/createProgramSchema.ts';
import { createUserProgram } from '../services/createUserProgram/createUserProgram.ts';

const initialState: CreateProgramSchema = {
    name: '',
    description: '',
    publicSetting: 'true',
    errors: undefined,
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
        setIsPublic: (state, action: PayloadAction<'true' | 'false'>) => {
            state.publicSetting = action.payload;
        },
        setErrors: (state, action: PayloadAction<createProgramErrors>) => {
            state.errors = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUserProgram.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(createUserProgram.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(createUserProgram.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: createProgramActions } = createProgramSlice;
export const { reducer: createProgramReducer } = createProgramSlice;
