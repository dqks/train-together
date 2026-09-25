import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { $api, type ResponseType } from '@/shared/api/api.ts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ErrorObjectState } from '../../types/editExerciseSchema';

export type UpdateExerciseBody = {
    id: number | undefined;
    image: File | undefined
    name: string | undefined
    // exerciseProgressionTypeId: string | undefined
    primaryMuscleId: string | undefined
    secondaryMuscleIds: string[] | undefined
    equipmentId: string | undefined
}

export const updateExercise = async (body: UpdateExerciseBody) => {
    const fd = new FormData();
    fd.append('image', body?.image || '');
    fd.append('name', body?.name || '');
    fd.append('primaryMuscleId', body?.primaryMuscleId || '');
    fd.append('equipmentId', body?.equipmentId || '');

    if (body?.secondaryMuscleIds) {
        body?.secondaryMuscleIds.forEach((secondaryMuscleId: string, index) => {
            fd.append(`secondaryMuscleIds[${index}]`, secondaryMuscleId);
        });
    }

    const response = await $api.patch(`exercises/${body.id}`, fd);
    return response.data as ResponseType<{success: boolean}, string>;
};

export const updateExerciseThunk = createAsyncThunk<
    ResponseType<{success: boolean}, string>,
    UpdateExerciseBody, 
    ThunkConfig<ErrorObjectState>>(
        "editExercice/updateExercise", 
        async (data, thunkAPI) => {

        const { extra, rejectWithValue } = thunkAPI;

        try {

            const fd = new FormData();
            fd.append('image', data?.image || '');
            fd.append('name', data?.name || '');
            fd.append('primaryMuscleId', data?.primaryMuscleId || '');
            fd.append('equipmentId', data?.equipmentId || '');

            if (data?.secondaryMuscleIds) {
                data?.secondaryMuscleIds.forEach((secondaryMuscleId: string, index) => {
                    fd.append(`secondaryMuscleIds[${index}]`, secondaryMuscleId);
                });
            }

            const response = await extra.api.patch(`exercises/${data.id}`, fd);
            return response.data;

        } catch (err: any) {
            return rejectWithValue(err.response.data.messages);
        }

})