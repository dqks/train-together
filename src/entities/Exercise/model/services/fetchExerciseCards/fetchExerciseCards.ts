import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { ExerciseError, ExerciseInformation } from '@/entities/Exercise/model/types/exerciseSchema.ts';

type ResponseType = {
    data: ExerciseInformation[]
}

export type Filters = {
    equipmentId?: string | null
    primaryMuscles?: string | null
}

export const fetchExerciseCards = createAsyncThunk<
    ExerciseInformation[],
    Filters | undefined,
    ThunkConfig<ExerciseError>>(
        'exercise/fetchExerciseCards',
        async (filters, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI;

            try {
                const params = [];

                if (filters?.equipmentId) {
                    params.push(`equipmentId=${filters.equipmentId}`);
                }

                if (filters?.primaryMuscles) {
                    params.push(`primaryMuscles=${filters.primaryMuscles}`);
                }

                const response = await extra.api
                    .get<ResponseType>(
                        params.length > 0
                            ? `/exercises?${params.join('&')}`
                            : '/exercises',
                    );

                if (!response.data) {
                    throw new Error('Error occurred');
                }

                return response.data.data;
            } catch (e: any) {
                return rejectWithValue(e.response.data.messages);
            }
        },
    );
