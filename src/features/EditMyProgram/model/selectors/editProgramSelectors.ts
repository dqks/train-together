import type { StateSchema } from '@/app/providers/StoreProvider';

export const getName = (state: StateSchema) => state.editProgram?.programMainInfo.name;
export const getDescription = (state: StateSchema) => state.editProgram?.programMainInfo.description || null;
export const getIsPublic = (state: StateSchema) => state.editProgram?.programMainInfo.isPublic;
export const getSelectedDiffId = (state: StateSchema) => state.editProgram?.programMainInfo.selectedDiffId;
export const getSelectedGoalId = (state: StateSchema) => state.editProgram?.programMainInfo.selectedGoalId;
export const getDaysInfo = (state: StateSchema) => state.editProgram?.daysInfo;
export const getDisableEdit = (state: StateSchema) => state.editProgram?.disableEdit;
export const getSendUpdateDays = (state: StateSchema) => state.editProgram?.sendUpdateDays;
export const getSendUpdateProgramInfo = (state: StateSchema) => state.editProgram?.sendUpdateProgramInfo;
export const getIsLoadingPrograms = (state: StateSchema) => state.editProgram?.isLoadingPrograms;
export const getIsLoadingDays = (state: StateSchema) => state.editProgram?.isLoadingDays;
export const getErrorProgramInfo = (state: StateSchema) => state.editProgram?.errorProgramInfo;
export const getErrorDays = (state: StateSchema) => state.editProgram?.errorDays;
export const getSelectedExercises = (state: StateSchema) => state.editProgram?.exerciseSelection.selectedExercises || [];
export const getSavingResult = (state: StateSchema) => state.editProgram?.savingResult || 'editing';
export const getSelectedDayId = (state: StateSchema) => state.editProgram?.exerciseSelection.selectedDayId;
