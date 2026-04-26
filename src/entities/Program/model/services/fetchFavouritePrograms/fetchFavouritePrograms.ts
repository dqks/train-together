import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { ProgramCard } from '@/entities/Program/model/types/programSchema.ts';

type ResponseType = {
    data: ProgramCard[]
}

export const fetchFavouritePrograms = createAsyncThunk<ProgramCard[], void, ThunkConfig<string>>(
    'program/fetchFavouritePrograms',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api
                .get<ResponseType>('/training-programs/favourite');

            if (!response.data) {
                throw new Error('Error occurred');
            }

            return response.data.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
