import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { ProgramDetails, ProgramError } from '@/entities/Program/model/types/programSchema.ts';

type ResponseType = {
    data: ProgramDetails
}

export const fetchProgramDetails = createAsyncThunk<ProgramDetails, number, ThunkConfig<ProgramError>>(
    'program/fetchProgramDetails',
    async (id, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api
                .get<ResponseType>(`/training-programs/${id}`);

            if (!response.data) {
                throw new Error('Error occurred');
            }

            return response.data.data;
        } catch (e : any) {
            return rejectWithValue(e.response.data.messages);
        }
    },
);
