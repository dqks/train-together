import type { StateSchema } from '@/app/providers/StoreProvider';

// Public programs
export const getPublicPrograms = (state: StateSchema) => state.publicProgram?.publicPrograms || [];
export const getPublicProgramsIsLoading = (state: StateSchema) => state.publicProgram?.isLoading || false;

// User programs
export const getUserPrograms = (state: StateSchema) => state.userPrograms?.userPrograms || [];
export const getUserProgramsIsLoading = (state: StateSchema) => state.userPrograms?.isLoading || false;

// Favourite programs
export const getFavouritePrograms = (state: StateSchema) => state.favouritePrograms?.favouritePrograms || [];
export const getFavouriteProgramsIsLoading = (state: StateSchema) => state.favouritePrograms?.isLoading || false;

// Program details
export const getProgramDetails = (state: StateSchema) => state.programDetails?.programDetails || null;
export const getProgramDetailsIsLoading = (state: StateSchema) => state.programDetails?.isLoading || false;

// Days of week
export const getDaysOfWeek = (state: StateSchema) => state.daysOfWeek?.daysOfWeek || null;
export const getDaysOfWeekIsLoading = (state: StateSchema) => state.daysOfWeek?.isLoading || false;
