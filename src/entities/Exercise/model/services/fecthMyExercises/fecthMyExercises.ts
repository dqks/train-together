import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { ExerciseInformation } from '@/entities/Exercise/model/types/exerciseSchema.ts';

type ResponseType = {
    data: ExerciseInformation[]
}

export const fetchMyExercises = createAsyncThunk<ExerciseInformation[], void, ThunkConfig<string>>(
    'exercise/fetchMyExercises',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api
                .get<ResponseType>('/exercises/my');

            if (!response.data) {
                throw new Error('Error occurred');
            }

            return response.data.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
