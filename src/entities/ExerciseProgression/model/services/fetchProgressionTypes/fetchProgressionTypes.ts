import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { ExerciseProgression } from '@/entities/ExerciseProgression';

type Response = {
    data: ExerciseProgression[]
}

export const fetchProgressionTypes = createAsyncThunk<ExerciseProgression[], void, ThunkConfig<string>>(
    'exerciseProgression/fetchProgressionTypes',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api
                .get<Response>('/exercise-progression-types');

            if (!response.data.data) {
                throw new Error('Error occurred');
            }

            return response.data.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
