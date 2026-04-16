import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Muscle } from '../../types/muscleSchema.ts';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';

type Response = {
    data: Muscle[];
}

export const fetchMuscleList = createAsyncThunk<Muscle[], void, ThunkConfig<string>>(
    'muscle/fetchMuscleList',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api
                .get<Response>('/muscles');

            if (!response.data.data) {
                throw new Error('Error occurred');
            }

            return response.data.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
