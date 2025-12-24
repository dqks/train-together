import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Equipment } from '../../types/equipmentSchema.ts';

export const fetchEquipmentList = createAsyncThunk<Equipment[], void, {rejectValue: string}>(
    'muscle/fetchEquipmentList',
    async (_, thunkAPI) => {
        try {
            const response = await axios
                .get<Equipment[]>('http://localhost:8080/api/equipment');

            if (!response.data) {
                throw new Error('Error occurred');
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
