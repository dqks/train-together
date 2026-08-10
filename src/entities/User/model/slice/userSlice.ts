import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserSchema } from '../types/userSchema';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/userKey.ts';
import { me } from '../services/me/me.ts';
import { logout } from '../services/logout/logout';

const initialState: UserSchema = {
    id: undefined,
    nickname: undefined,
    email: undefined,
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

    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
