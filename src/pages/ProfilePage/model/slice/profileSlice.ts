import { createSlice,  } from '@reduxjs/toolkit';
import type { ProfileSchema } from '@/pages/ProfilePage/model/types/profileSchema.ts';
import { fetchUserPrograms } from '@/pages/ProfilePage/model/services/fetchUserPrograms/fetchUserPrograms.ts';
import { fetchProfileInfo } from '../services/fetchProfileInfo/fetchProfileInfo';

const initialState: ProfileSchema = {
    userPrograms: undefined,
    ratedPrograms: undefined,
    profileInfo: undefined,
    error: undefined,
    isInitializing: false,
    isLoading: false,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
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
            })
            builder.addCase(fetchProfileInfo.pending, (state) => {
                state.isInitializing = true;
            });
            builder.addCase(fetchProfileInfo.fulfilled, (state, action) => {
                state.isInitializing = false;
                state.profileInfo = action.payload;
            });
            builder.addCase(fetchProfileInfo.rejected, (state, action) => {
                state.isInitializing = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
