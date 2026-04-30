import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { createProgramErrors, CreateProgramSchema } from '../types/createProgramSchema.ts';
import { createUserProgram } from '../services/createUserProgram/createUserProgram.ts';
import { fetchCreateInfo } from '@/features/AddMyProgram/model/services/fetchCreateInfo/fetchCreateInfo.ts';

const initialState: CreateProgramSchema = {
    name: '',
    description: '',
    publicSetting: 'true',
    goals: undefined,
    difficulties: undefined,
    selectedDifficulty: 'default',
    selectedGoal: 'default',
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
        setSelectedGoal: (state, action: PayloadAction<string>) => {
            state.selectedGoal = action.payload;
        },
        setSelectedDifficulty: (state, action: PayloadAction<string>) => {
            state.selectedDifficulty = action.payload;
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
            })
            .addCase(fetchCreateInfo.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCreateInfo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.difficulties = action.payload.difficulties;
                state.goals = action.payload.goals;
            })
            .addCase(fetchCreateInfo.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: createProgramActions } = createProgramSlice;
export const { reducer: createProgramReducer } = createProgramSlice;
