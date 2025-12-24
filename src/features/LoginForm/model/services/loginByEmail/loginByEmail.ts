import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from '@/entities/User';

type LoginData = {
    email: string
    password: string
}

type ResponseType = {
    id: number
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

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
