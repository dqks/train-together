import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';

type Return = {
    success: boolean
}

type Response = {
    data: Return
}

type ArgType = {
    name: string
    progressionType: number
    // primaryMuscleId: number
    // secondaryMusclesId?: number[]
    // equipmentId?: number
    closeHandler: () => void
}

export const createUserExercise = createAsyncThunk<Return, ArgType, ThunkConfig<string>>(
    'createExercise/createUserExercise',
    async (
        exerciseData,
        thunkAPI,
    ) => {
        const { extra } = thunkAPI;
        try {
            const data = {
                name: exerciseData.name,
                exerciseProgressionTypeId: exerciseData.progressionType,
            };

            const response = await extra.api
                .post<Response>(
                    '/exercises',
                    data,
                );

            if (!response.data.data.success) {
                throw new Error('Error occurred');
            }

            exerciseData.closeHandler();

            return response.data.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
