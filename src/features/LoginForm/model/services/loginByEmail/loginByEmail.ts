import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from '@/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/localStorage/userKey.ts';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';

type LoginData = {
    email: string
    password: string
}

type Return = {
    id: number
    nickname: string
    email: string
}

type Response = {
    data: Return
}

export const loginByEmail = createAsyncThunk<Return, LoginData, ThunkConfig<string>>(
    'login/loginByEmail',
    async (loginData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api
                .post<Response>(
                    '/auth/login',
                    loginData,
                );

            const { data } = response.data;

            if (!data) {
                throw new Error('Error occurred');
            }

            dispatch(userActions.setId(data.id));
            dispatch(userActions.setNickname(data.nickname));

            localStorage.setItem(
                USER_LOCAL_STORAGE_KEY,
                JSON.stringify({ nickname: data.nickname, email: data.email }),
            );

            return response.data.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
