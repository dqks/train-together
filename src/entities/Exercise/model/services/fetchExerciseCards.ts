import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { ExerciseInformation } from '@/entities/Exercise/model/types/exerciseSchema.ts';

type ResponseType = {
    data: ExerciseInformation[]
}

export const fetchExerciseCards = createAsyncThunk<ExerciseInformation[], void, ThunkConfig<string>>(
    'exercise/fetchExerciseCards',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api
                .get<ResponseType>('/exercises');

            if (!response.data) {
                throw new Error('Error occurred');
            }

            return response.data.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
