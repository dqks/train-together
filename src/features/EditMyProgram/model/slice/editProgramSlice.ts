import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { EditProgramSchema, EditProgramErrorInfo, EditDaysInfo } from '../types/editProgramSchema';
import type {  ProgramDetails } from '@/entities/Program';
import { updateDays } from '../services/updateDays/updateDays.ts';
import { updateProgramInfo } from '../services/updateProgram/updateProgramInfo.ts';

const initialState: EditProgramSchema = {
    // TODO убрать disableEdit
    daysInfo: [],
    programMainInfo: {
        name: "",
        description: "",
        isPublic: false,
        selectedGoalId: 0,
        selectedDiffId: 0
    },
    disableEdit: true,
    errorDays: undefined,
    errorProgramInfo: null,
    isLoadingDays: false,
    isLoadingPrograms: false,
    sendUpdateDays: false,
    sendUpdateProgramInfo: false,
    selectedExerciseIds: [],
    saveError: false,
};

export const programsSlice = createSlice({
    name: 'editProgram',
    initialState,
    reducers: {
        initEditForm: (state, action: PayloadAction<ProgramDetails | null>) => {
            // main info
            state.programMainInfo.name = action.payload?.name;
            state.programMainInfo.description = action.payload?.description || "";
            state.programMainInfo.isPublic = action.payload?.isPublic;
            state.programMainInfo.selectedDiffId = action.payload?.difficulty.id;
            state.programMainInfo.selectedGoalId = action.payload?.goal.id;
            // days and exercises
            state.daysInfo = action.payload?.days.map((d) => (
                {
                    dayId: d.id,
                    dayOfWeekId: d.day.id,
                    description: d.description,
                    name: d.name,
                    exercises: d.exercises
                } 
            ))
        },
        setName: (state, action: PayloadAction<string>) => {
            state.programMainInfo.name = action.payload;
            state.disableEdit = false;
            state.sendUpdateProgramInfo = true;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.programMainInfo.description = action.payload;
            state.disableEdit = false;
            state.sendUpdateProgramInfo = true;
        },
        setIsPublic: (state, action: PayloadAction<boolean>) => {
            state.programMainInfo.isPublic = action.payload;
            state.disableEdit = false;
            state.sendUpdateProgramInfo = true;
        },
        setSelectedDiffId: (state, action: PayloadAction<number>) => {
            state.programMainInfo.selectedDiffId = action.payload;
            state.disableEdit = false;
            state.sendUpdateProgramInfo = true;
        },
        setSelectedGoalId: (state, action: PayloadAction<number>) => {
            state.programMainInfo.selectedGoalId = action.payload;
            state.disableEdit = false;
            state.sendUpdateProgramInfo = true;
        },
        setTrainingDays: (state, action: PayloadAction<EditDaysInfo[]>) => {
            state.daysInfo = action.payload;
            state.disableEdit = false;
            state.sendUpdateDays = true;
        },
        setDiableEdit: (state, action: PayloadAction<boolean>) => {
            state.disableEdit = action.payload;
        },
        setSendUpdateProgramInfo: (state, action: PayloadAction<boolean>) => {
            state.sendUpdateProgramInfo = action.payload;
        },
        setSelectedExerciseIds: (state, action: PayloadAction<number[]>) => {
            state.selectedExerciseIds = action.payload;
        },
        setErrorProgramInfo: (state, action: PayloadAction<EditProgramErrorInfo>) => {
            state.errorProgramInfo = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateDays.pending, (state) => {
                state.errorDays = undefined;
                state.isLoadingDays = true;
                state.saveError = false;
            })
            .addCase(updateDays.fulfilled, (state) => {
                state.isLoadingDays = false;
                state.saveError = false;
            })
            .addCase(updateDays.rejected, (state, action) => {
                state.isLoadingDays = false;
                state.errorDays = action.payload;
                state.saveError = true;
            })
            .addCase(updateProgramInfo.pending, (state) => {
                state.errorProgramInfo = null;
                state.isLoadingPrograms = true;
                state.saveError = false;
            })
            .addCase(updateProgramInfo.fulfilled, (state) => {
                state.isLoadingPrograms = false;
                state.saveError = false;
            })
            .addCase(updateProgramInfo.rejected, (state, action) => {
                state.isLoadingPrograms = false;
                state.errorProgramInfo = action.payload;
                state.saveError = true;
            });
    },
});

export const { actions: editProgramActions } = programsSlice;
export const { reducer: editProgramReducer } = programsSlice;
