import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { EditProgramSchema } from '../types/editProgramSchema';
import type { Day, ProgramDetails } from '@/entities/Program';

const initialState: EditProgramSchema = {
    description: "",
    isPublic: false,
    name: "",
    selectedDiffId: 0,
    selectedGoalId: 0,
    trainingDays: []
};

export const programsSlice = createSlice({
    name: 'program',
    initialState,
    reducers: {
        initEditForm: (state, action: PayloadAction<ProgramDetails | null>) => {
            state.name = action.payload?.name;
            state.description = action.payload?.description;
            state.isPublic = action.payload?.isPublic;
            state.selectedDiffId = action.payload?.difficulty.id;
            state.selectedGoalId = action.payload?.goal.id;
            state.trainingDays = action.payload?.days;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload
        },
        setIsPublic: (state, action: PayloadAction<boolean>) => {
            state.isPublic = action.payload
        },
        setSelectedDiffId: (state, action: PayloadAction<number>) => {
            state.selectedDiffId = action.payload
        },
        setSelectedGoalId: (state, action: PayloadAction<number>) => {
            state.selectedGoalId = action.payload
        },
        setTrainingDays: (state, action: PayloadAction<Day[]>) => {
            state.trainingDays = action.payload
        },
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(fetchPublicPrograms.pending, (state) => {
        //         state.error = undefined;
        //         state.isLoading = true;
        //     })
        //     .addCase(fetchPublicPrograms.fulfilled, (state, action) => {
        //         state.isLoading = false;
        //         state.publicPrograms = action.payload;
        //     })
        //     .addCase(fetchPublicPrograms.rejected, (state, action) => {
        //         state.isLoading = false;
        //         state.error = action.payload;
        //     })
    },
});

export const { actions: editProgramActions } = programsSlice;
export const { reducer: editProgramReducer } = programsSlice;
