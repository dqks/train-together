import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { ProgramCard } from '@/entities/Program/model/types/programSchema.ts';

type ResponseType = {
    data: ProgramCard[]
}

export const fetchUserPrograms = createAsyncThunk<ProgramCard[], number, ThunkConfig<string>>(
    'profile/fetchUserPrograms',
    async (id, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api
                .get<ResponseType>(`/training-programs/user/${id}`);

            if (!response.data) {
                throw new Error('Error occurred');
            }

            return response.data.data;
        } catch (e: any) {
            return rejectWithValue(e.response.data.messages);
        }
    },
);
