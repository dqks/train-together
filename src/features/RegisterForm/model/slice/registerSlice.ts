import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RegisterSchema } from '../types/registerSchema.ts';
import { registerByEmail } from '@/features/RegisterForm/model/services/registerByEmail/registerByEmail.ts';

const initialState: RegisterSchema = {
    email: '',
    password: '',
    nickname: '',
    error: undefined,
    isLoading: false,
};

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setNickname: (state, action: PayloadAction<string>) => {
            state.nickname = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerByEmail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registerByEmail.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(registerByEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: registerActions } = registerSlice;
export const { reducer: registerReducer } = registerSlice;
