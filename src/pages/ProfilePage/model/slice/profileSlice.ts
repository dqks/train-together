import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ProfileSchema } from '@/pages/ProfilePage/model/types/profileSchema.ts';
import { fetchUserPrograms } from '@/pages/ProfilePage/model/services/fetchUserPrograms/fetchUserPrograms.ts';

const initialState: ProfileSchema = {
    userPrograms: undefined,
    ratedPrograms: undefined,
    error: undefined,
    isLoading: false,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        // setExerciseCards: (state, action: PayloadAction<ExerciseInformation[]>) => {
        //     state.exerciseCards = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserPrograms.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchUserPrograms.fulfilled, (state, action) => {
                state.userPrograms = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchUserPrograms.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
