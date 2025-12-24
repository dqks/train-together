import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from '@/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/localStorage/userKey.ts';

type LoginData = {
    email: string
    password: string
}

type ResponseType = {
    id: number
    nickname: string
}

export const loginByEmail = createAsyncThunk<ResponseType, LoginData, {rejectValue: string}>(
    'login/loginByEmail',
    async (loginData, thunkAPI) => {
        try {
            const response = await axios
                .post<ResponseType>('http://localhost:8080/api/user/login', {
                    ...loginData,
                });

            if (!response.data) {
                throw new Error('Error occurred');
            }

            thunkAPI.dispatch(userActions.setId(response.data.id));
            thunkAPI.dispatch(userActions.setNickname(response.data.nickname));
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
