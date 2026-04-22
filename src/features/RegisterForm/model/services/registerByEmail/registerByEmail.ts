import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import { registerActions } from '@/features/RegisterForm/model/slice/registerSlice.ts';
import type { errorKeys } from '@/features/RegisterForm/model/types/registerSchema.ts';

type RegisterData = {
    email: string
    password: string
    nickname: string
    navigateToLogin: () => void
}

type ResponseData = {
    id: number
    nickname: string
}

type ResponseType = {
    data: ResponseData
    resultCode: number
    messages: Record<string, string[]>
}

export const registerByEmail = createAsyncThunk<
    ResponseType,
    RegisterData,
    ThunkConfig<Record<errorKeys, string[]> | undefined>>(
        'register/registerByEmail',
        async (registerData, thunkAPI) => {
            const { dispatch, extra, rejectWithValue } = thunkAPI;
            try {
                const response = await extra.api
                    .post<ResponseType>('/auth/registration', {
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
