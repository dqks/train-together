import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { ResponseType } from '@/shared/api/api.ts';
import type { Difficulty, Goal } from '../../types/programSchema';

export type CreateInfo = {
    goals: Goal[]
    difficulties: Difficulty[]
}

export const fetchCreateInfo = createAsyncThunk<CreateInfo, void, ThunkConfig<Record<string, string[]>>>(
    'program/fetchCreateInfo',
    async (
        _,
        thunkAPI,
    ) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api
                .get<ResponseType<CreateInfo, any>>(
                    '/training-programs/create-info',

                );

            if (!response.data.data) {
                throw new Error('Error occurred');
            }

            return response.data.data;
        } catch (err : any) {
            return rejectWithValue({ name: ['Ошибка загрузки данных'] });
        }
    },
);
