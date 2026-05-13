import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { errorObject } from '../../types/addExerciseSchema.ts';
import { fetchMyExercises } from '@/entities/Exercise/model/services/fecthMyExercises/fecthMyExercises.ts';

type Return = {
    success: boolean
}

type Response = {
    data: Return
}

type ArgType = {
    name: string
    progressionType: number
    primaryMuscleId: number | undefined
    // secondaryMusclesId?: number[]
    equipmentId: number | undefined
    closeHandler: () => void
    image: File | undefined
}

export const createUserExercise = createAsyncThunk<Return, ArgType, ThunkConfig<errorObject>>(
    'createExercise/createUserExercise',
    async (
        exerciseData,
        thunkAPI,
    ) => {
        const { extra, dispatch } = thunkAPI;
        try {
            const fd = new FormData();
            fd.append('name', exerciseData.name);
            fd.append('exerciseProgressionTypeId', exerciseData.progressionType.toString());
            fd.append('primaryMuscleId', exerciseData?.primaryMuscleId?.toString() || '');
            fd.append('equipmentId', exerciseData?.equipmentId?.toString() || '');
            fd.append('image', exerciseData.image || '');

            const response = await extra.api
                .post<Response>(
                    '/exercises',
                    fd,
                );

            if (!response.data.data.success) {
                throw new Error('Error occurred');
            }

            exerciseData.closeHandler();

            dispatch(fetchMyExercises());

            return response.data.data;
        } catch (e) {
            return thunkAPI.rejectWithValue({ status: ['Server error'] });
        }
    },
);
