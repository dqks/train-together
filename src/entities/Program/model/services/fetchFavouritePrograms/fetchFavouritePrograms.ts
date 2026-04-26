import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { ProgramCard } from '@/entities/Program/model/types/programSchema.ts';

type ResponseType = {
    data: ProgramCard[]
}

type ErrorType = Record<string, string[]>

export const fetchFavouritePrograms = createAsyncThunk<ProgramCard[], void, ThunkConfig<ErrorType>>(
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
        } catch (e: any) {
            return rejectWithValue(e.data.messages);
        }
    },
);
