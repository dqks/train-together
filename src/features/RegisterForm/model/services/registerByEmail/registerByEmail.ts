import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from '@/entities/User';

type RegisterData = {
    email: string
    password: string
    nickname: string
}

type ResponseType = {
    id: number
}

export const registerByEmail = createAsyncThunk<ResponseType, RegisterData, {rejectValue: string}>(
    'register/registerByEmail',
    async (registerData, thunkAPI) => {
        try {
            const response = await axios
                .post<ResponseType>('http://localhost:8080/api/user', {
                    ...registerData,
                });

            if (!response.data) {
                throw new Error('Error occured');
            }

            thunkAPI.dispatch(userActions.setId(response.data.id));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
