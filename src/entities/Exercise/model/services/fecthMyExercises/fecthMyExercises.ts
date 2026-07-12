import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { ExerciseError, Exercise } from '@/entities/Exercise/model/types/exerciseSchema.ts';

type ResponseType = {
    data: Exercise[]
}

export const fetchMyExercises = createAsyncThunk<Exercise[], void, ThunkConfig<ExerciseError>>(
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
        } catch (e: any) {
            return rejectWithValue(e.response.data.messages);
        }
    },
);
