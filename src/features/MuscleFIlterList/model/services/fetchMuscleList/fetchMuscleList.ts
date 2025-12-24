import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Muscle } from '../../types/muscleSchema.ts';

export const fetchMuscleList = createAsyncThunk<Muscle[], void, {rejectValue: string}>(
    'muscle/fetchEquipmentList',
    async (_, thunkAPI) => {
        try {
            const response = await axios
                .get<Muscle[]>('http://localhost:8080/api/muscles');

            if (!response.data) {
                throw new Error('Error occurred');
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
