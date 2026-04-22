import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import { userActions } from '@/entities/User';

type Response = any

export const logout = createAsyncThunk<Response, void, ThunkConfig<string>>(
    'user/logout',
    async (_, thunkAPI) => {
        const { extra, dispatch } = thunkAPI;
        try {
            const response = await extra.api
                .post<Response>('/auth/logout');

            if (!response.data.data.message) {
                throw new Error('Error occurred');
            }

            dispatch(userActions.setId(null));

            return response.data.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
