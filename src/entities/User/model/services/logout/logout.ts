import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';

type Response = any

export const logout = createAsyncThunk<Response, void, ThunkConfig<string>>(
    'user/logout',
    async (_, thunkAPI) => {
        const { extra } = thunkAPI;
        try {
            const response = await extra.api
                .post<Response>('/auth/logout');

            if (!response.data.data.message) {
                throw new Error('Error occurred');
            }

            return response.data.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
