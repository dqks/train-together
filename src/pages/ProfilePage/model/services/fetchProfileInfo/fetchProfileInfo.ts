import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { ResponseType } from '@/shared/api/api.ts';
import type { Profile } from '../../types/profileSchema';

type Response = Profile

export const fetchProfileInfo = createAsyncThunk<Response, number, ThunkConfig<string>>(
    'profile/fetchProfileInfo',
    async (id, thunkAPI) => {
        const { extra } = thunkAPI;
        try {
            const response = await extra.api
                .get<ResponseType<Profile, any>>(`/users/${id}`);

            if (!response.data.messages) {
                throw new Error('Error occurred');
            }

            return response.data.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
