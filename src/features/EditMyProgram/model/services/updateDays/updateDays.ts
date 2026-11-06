import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api, type ResponseType } from '@/shared/api/api.ts';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { LoginErrors } from '@/features/LoginForm/model/types/loginSchema.ts';

type UpdateDaysRequest = {
    programId: number | undefined;
    details: {
        // Day of week id
        dayId: number;
        name: string;
        description: string | null;
        exercises: {
            exerciseId: number
            sets: number
            reps: number
            exerciseOrder: number
        }[]
    }[] | undefined
}

type UpdateDaysResponse = ResponseType<{ success: boolean }, string>

export const updateDays = createAsyncThunk<
    UpdateDaysResponse,
    UpdateDaysRequest,
    ThunkConfig<LoginErrors>>(
        'editProgram/updateDays',
        async (
            daysData,
            thunkAPI,
        ) => {
            const { rejectWithValue } = thunkAPI;
            try {
                const body = { details: daysData.details };
                const response = await $api.put(
                    `/training-programs/${daysData.programId}`,
                    body,
                );
                return response.data as ResponseType<{ success: boolean }, string>;
            } catch (err: any) {
                return rejectWithValue(err.response.data.messages);
            }
        },
    );
