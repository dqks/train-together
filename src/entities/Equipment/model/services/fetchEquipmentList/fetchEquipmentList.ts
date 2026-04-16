import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Equipment } from '../../types/equipmentSchema.ts';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';

type Response = {
    data: Equipment[]
}

export const fetchEquipmentList = createAsyncThunk<Equipment[], void, ThunkConfig<string>>(
    'equipment/fetchEquipmentList',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api
                .get<Response>('/equipment');

            if (!response.data.data) {
                throw new Error('Error occurred');
            }

            return response.data.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
