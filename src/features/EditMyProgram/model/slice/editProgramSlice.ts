import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { EditProgramSchema } from '../types/editProgramSchema';
import type { Day, ProgramDetails } from '@/entities/Program';
import { updateDays } from '../services/updateDays/updateDays.ts';
import { updateProgramInfo } from '../services/updateProgram/updateProgramInfo.ts';

const initialState: EditProgramSchema = {
    // TODO убрать disableEdit
    disableEdit: true,
    description: '',
    isPublic: false,
    name: '',
    selectedDiffId: 0,
    selectedGoalId: 0,
    trainingDays: [],
    errorDays: undefined,
    errorProgramInfo: undefined,
    isLoadingDays: false,
    isLoadingPrograms: false,
    sendUpdateDays: false,
    sendUpdateProgramInfo: false,
};

export const programsSlice = createSlice({
    name: 'editProgram',
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
            state.name = action.payload;
            state.disableEdit = false;
            state.sendUpdateProgramInfo = true;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
            state.disableEdit = false;
            state.sendUpdateProgramInfo = true;
        },
        setIsPublic: (state, action: PayloadAction<boolean>) => {
            state.isPublic = action.payload;
            state.disableEdit = false;
            state.sendUpdateProgramInfo = true;
        },
        setSelectedDiffId: (state, action: PayloadAction<number>) => {
            state.selectedDiffId = action.payload;
            state.disableEdit = false;
            state.sendUpdateProgramInfo = true;
        },
        setSelectedGoalId: (state, action: PayloadAction<number>) => {
            state.selectedGoalId = action.payload;
            state.disableEdit = false;
            state.sendUpdateProgramInfo = true;
        },
        setTrainingDays: (state, action: PayloadAction<Day[]>) => {
            state.trainingDays = action.payload;
            state.disableEdit = false;
        },
        setDiableEdit: (state, action: PayloadAction<boolean>) => {
            state.disableEdit = action.payload;
        },
        setSendUpdateProgramInfo: (state, action: PayloadAction<boolean>) => {
            state.sendUpdateProgramInfo = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateDays.pending, (state) => {
                state.errorDays = undefined;
                state.isLoadingDays = true;
            })
            .addCase(updateDays.fulfilled, (state) => {
                state.isLoadingDays = false;
            })
            .addCase(updateDays.rejected, (state, action) => {
                state.isLoadingDays = false;
                state.errorDays = action.payload;
            })
            .addCase(updateProgramInfo.pending, (state) => {
                state.errorProgramInfo = undefined;
                state.isLoadingPrograms = true;
            })
            .addCase(updateProgramInfo.fulfilled, (state) => {
                state.isLoadingPrograms = false;
            })
            .addCase(updateProgramInfo.rejected, (state, action) => {
                state.isLoadingPrograms = false;
                state.errorProgramInfo = action.payload;
            });
    },
});

export const { actions: editProgramActions } = programsSlice;
export const { reducer: editProgramReducer } = programsSlice;
