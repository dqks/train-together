import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';

type Response = any

export const me = createAsyncThunk<Response, void, ThunkConfig<string>>(
    'user/me',
    async (_, thunkAPI) => {
        const { extra } = thunkAPI;
        try {
            const response = await extra.api
                .get<Response>('/auth/me');

            if (!response.data) {
                throw new Error('Error occurred');
            }

            return response.data.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
