import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type ReturnType = {
    id: number
}

type ArgType = {
    userId: number
    name: string
    description: string
}

export const createUserProgram = createAsyncThunk<ReturnType, ArgType, {rejectValue: string}>(
    'createPrograms/createUserProgram',
    async (programData, thunkAPI) => {
        try {
            const response = await axios
                .post<ReturnType>(
                    'http://localhost:8080/api/training-programs',
                    { ...programData },
                );

            if (!response.data) {
                throw new Error('Error occured');
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
