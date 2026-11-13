import type { StateSchema } from "@/app/providers/StoreProvider";

// exercise
export const getExerciseIsLoading = (state: StateSchema) => state.exercise.isLoading
export const getExerciseError = (state: StateSchema) => state.exercise.error

// myExercise
export const getMyExerciseIsLoading = (state: StateSchema) => state.myExercise.isLoading
export const getMyExerciseError = (state: StateSchema) => state.myExercise.error
export const getMyExercises = (state: StateSchema) => state.myExercise.myExercises

// exerciseDetails
export const getExerciseDetailsIsLoading = (state: StateSchema) => state.exerciseDetails?.isLoading
export const getExerciseDetailsError = (state: StateSchema) => state.exerciseDetails?.error
export const getExerciseDetails = (state: StateSchema) => state.exerciseDetails?.exerciseDetails
