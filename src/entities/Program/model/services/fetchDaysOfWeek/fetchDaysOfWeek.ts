import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { ResponseType } from '@/shared/api/api.ts';
import type { DayOfWeek } from '@/entities/Program/model/types/programSchema.ts';

export const fetchDaysOfWeek = createAsyncThunk<DayOfWeek[], void, ThunkConfig<Record<string, string[]>>>(
    'program/fetchDaysOfWeek',
    async (
        _,
        thunkAPI,
    ) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api
                .get<ResponseType<DayOfWeek[], any>>(
                    '/days',
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
