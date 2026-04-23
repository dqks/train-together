import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ProgramCard } from '../../types/programSchema.ts';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';

type ResponseType = {
    data: ProgramCard[];
}

export const fetchUserPrograms = createAsyncThunk<ProgramCard[], void, ThunkConfig<string>>(
    'program/fetchUserPrograms',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api
                .get<ResponseType>('/training-programs/my');

            if (!response.data) {
                throw new Error('Error occurred');
            }

            return response.data.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
