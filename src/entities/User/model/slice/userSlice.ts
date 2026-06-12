import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserSchema } from '../types/userSchema';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/userKey.ts';
import { me } from '../services/me/me.ts';
import { logout } from '../services/logout/logout';
import { fetchProfileInfo } from '../services/fetchProfileInfo/fetchProfileInfo.ts';

const initialState: UserSchema = {
    id: undefined,
    nickname: undefined,
    email: undefined,
    profileInfo: undefined,
    _inited: false,
    error: undefined,
    isLoading: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setId: (
            state,
            action: PayloadAction<number | undefined>,
        ) => {
            state.id = action.payload;
        },
        setNickname: (
            state,
            action: PayloadAction<string | undefined>,
        ) => {
            state.nickname = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
            state.id = undefined;
            state.nickname = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(me.fulfilled, (state, action) => {
            state.id = action.payload.id;
            state.nickname = action.payload.nickname;
            state.email = action.payload.email;
            state._inited = true;
            // localStorage.setItem(USER_LOCAL_STORAGE_KEY, action.payload.id);
        });
        builder.addCase(me.rejected, (state) => {
            state._inited = true;
        });
        builder.addCase(logout.fulfilled, (state) => {
            state.id = undefined;
            state.nickname = undefined;
        });
        builder.addCase(fetchProfileInfo.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProfileInfo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.profileInfo = action.payload;
        });
        builder.addCase(fetchProfileInfo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
