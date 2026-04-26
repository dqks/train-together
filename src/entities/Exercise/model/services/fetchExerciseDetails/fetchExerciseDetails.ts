import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { ExerciseDetails, ExerciseError } from '@/entities/Exercise/model/types/exerciseSchema.ts';

type ResponseType = {
    data: ExerciseDetails
}

export const fetchExerciseDetails = createAsyncThunk<ExerciseDetails, number, ThunkConfig<ExerciseError>>(
    'exercise/fetchExerciseDetails',
    async (id, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api
                .get<ResponseType>(`/exercises/${id}`);

            if (!response.data) {
                throw new Error('Error occurred');
            }

            return response.data.data;
        } catch (e: any) {
            return rejectWithValue(e.response.data.messages);
        }
    },
);
