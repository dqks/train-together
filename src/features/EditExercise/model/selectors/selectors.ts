import type { StateSchema } from "@/app/providers/StoreProvider";

export const getName = (state: StateSchema) => state.editExercise?.name || ""

export const getEquipmentId = (state: StateSchema) => state.editExercise?.equipmentId 

export const getErrors = (state: StateSchema) => state.editExercise?.errors

export const getStatus = (state: StateSchema) => state.editExercise?.status

export const getPrimaryMuscleId = (state: StateSchema) => state.editExercise?.primaryMuscleId 

export const getSecondaryMusleIds = (state: StateSchema) => state.editExercise?.secondaryMuscleIds 
