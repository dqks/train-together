import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import { registerActions } from '@/features/RegisterForm/model/slice/registerSlice.ts';
import type { RegisterErrorKeys } from '@/features/RegisterForm/model/types/registerSchema.ts';
import type { ResponseType } from '@/shared/api/api.ts';

type RegisterData = {
    email: string
    password: string
    nickname: string
    navigateToLogin: () => void
}

type ResponseData = {
    success: boolean
}

export const registerByEmail = createAsyncThunk<
    ResponseType<ResponseData, RegisterErrorKeys>,
    RegisterData,
    ThunkConfig<Record<RegisterErrorKeys, string[]> | undefined>>(
        'register/registerByEmail',
        async (registerData, thunkAPI) => {
            const { dispatch, extra, rejectWithValue } = thunkAPI;
            try {
                const response = await extra.api
                    .post<ResponseType<ResponseData, RegisterErrorKeys>>('/auth/registration', {
                        email: registerData.email,
                        password: registerData.password,
                        nickname: registerData.nickname,
                    });

                if (!response.data.data) {
                    dispatch(registerActions.setErrors(response.data.messages));
                    throw new Error('Error occurred');
                }

                registerData.navigateToLogin();

                return response.data;
            } catch (err: any) {
                return rejectWithValue(err?.response.data.messages);
            }
        },
    );
