import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Program } from '../../types/programSchema.ts';

export const fetchUserProgramList = createAsyncThunk<Program[], number, {rejectValue: string}>(
    'programs/createUserProgram',
    async (userId, thunkAPI) => {
        try {
            const response = await axios
                .get<Program[]>(`http://localhost:8080/api/training-programs/user/${userId}`);

            if (!response.data) {
                throw new Error('Error occured');
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
