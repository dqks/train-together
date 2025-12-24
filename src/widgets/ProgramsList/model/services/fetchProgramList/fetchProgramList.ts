import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Program } from '../../types/programSchema.ts';

export const fetchProgramList = createAsyncThunk<Program[], void, {rejectValue: string}>(
    'programs/fetchProgramList',
    async (_, thunkAPI) => {
        try {
            const response = await axios
                .get<Program[]>('http://localhost:8080/api/training-programs');

            if (!response.data) {
                throw new Error('Error occured');
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
