import type { StateSchema } from "@/app/providers/StoreProvider";

export const getName = (state: StateSchema) => state.editProgram?.name;
export const getDescription = (state: StateSchema) => state.editProgram?.description;
export const getIsPublic = (state: StateSchema) => state.editProgram?.isPublic;
export const getSelectedDiffId = (state: StateSchema) => state.editProgram?.selectedDiffId;
export const getSelectedGoalId = (state: StateSchema) => state.editProgram?.selectedGoalId;
export const getTrainingDays = (state: StateSchema) => state.editProgram?.trainingDays;
