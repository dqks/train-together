import type { StateSchema } from '@/app/providers/StoreProvider';

export const getName = (state: StateSchema) => state.editProgram?.name;
export const getDescription = (state: StateSchema) => state.editProgram?.description;
export const getIsPublic = (state: StateSchema) => state.editProgram?.isPublic;
export const getSelectedDiffId = (state: StateSchema) => state.editProgram?.selectedDiffId;
export const getSelectedGoalId = (state: StateSchema) => state.editProgram?.selectedGoalId;
export const getTrainingDays = (state: StateSchema) => state.editProgram?.trainingDays;
export const getDisableEdit = (state: StateSchema) => state.editProgram?.disableEdit;
export const getSendUpdateDays = (state: StateSchema) => state.editProgram?.sendUpdateDays;
export const getSendUpdateProgramInfo = (state: StateSchema) => state.editProgram?.sendUpdateProgramInfo;
export const getIsLoadingPrograms = (state: StateSchema) => state.editProgram?.isLoadingPrograms;
export const getIsLoadingDays = (state: StateSchema) => state.editProgram?.isLoadingDays;
export const getErrorProgramInfo = (state: StateSchema) => state.editProgram?.errorProgramInfo;
export const getErrorDays = (state: StateSchema) => state.editProgram?.errorDays;
