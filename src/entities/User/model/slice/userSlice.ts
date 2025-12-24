import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserSchema } from '../types/userSchema';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/localStorage/userKey.ts';

const initialState: UserSchema = {
    id: null,
    nickname: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setId: (state, action: PayloadAction<number | null>) => {
            state.id = action.payload;
        },
        setNickname: (state, action: PayloadAction<string | null>) => {
            state.nickname = action.payload;
        },
        initUserData: (state) => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
            if (user) {
                state.id = JSON.parse(user).id;
                state.nickname = JSON.parse(user).nickname;
            }
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
