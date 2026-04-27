import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserSchema } from '../types/userSchema';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/userKey.ts';
import { me } from '@/entities/User/model/services/me/me.ts';
import { logout } from '../services/logout/logout';

const initialState: UserSchema = {
    id: null,
    nickname: null,
    email: null,
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setId: (
            state,
            action: PayloadAction<number | null>,
        ) => {
            state.id = action.payload;
        },
        setNickname: (
            state,
            action: PayloadAction<string | null>,
        ) => {
            state.nickname = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
            state.id = null;
            state.nickname = null;
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
            state.id = null;
            state.nickname = null;
        });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
