import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { ResponseType } from '@/shared/api/api.ts';
import type { CreateInfo, createProgramErrors } from '../../types/createProgramSchema.ts';

export const fetchCreateInfo = createAsyncThunk<CreateInfo, void, ThunkConfig<createProgramErrors>>(
    'createPrograms/fetchCreateInfo',
    async (
        _,
        thunkAPI,
    ) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api
                .get<ResponseType<CreateInfo, any>>(
                    '/training-programs/create-info',

                );

            if (!response.data.data) {
                throw new Error('Error occurred');
            }

            console.log(response.data.data);

            return response.data.data;
        } catch (err : any) {
            return rejectWithValue({ name: ['4343'] });
        }
    },
);
