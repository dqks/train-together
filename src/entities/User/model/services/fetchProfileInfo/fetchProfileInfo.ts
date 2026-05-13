import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { Profile } from '@/entities/User/model/types/userSchema.ts';
import type { ResponseType } from '@/shared/api/api.ts';

type Response = Profile

export const fetchProfileInfo = createAsyncThunk<Response, number, ThunkConfig<string>>(
    'user/fetchProfileInfo',
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
