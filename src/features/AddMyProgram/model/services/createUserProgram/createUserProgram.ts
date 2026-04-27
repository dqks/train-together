import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import {
    fetchUserPrograms,
} from '@/entities/Program/model/services/fetchUserPrograms/fetchUserPrograms.ts';
import type { createProgramErrors } from '../../types/createProgramSchema.ts';

type Return = {
    success: boolean
}

type Response = {
    data: Return
}

type ArgType = {
    name: string
    description: string
    publicSetting: 'true' | 'false',
    image: File | undefined
    closeModal?: () => void
}

export const createUserProgram = createAsyncThunk<Return, ArgType, ThunkConfig<createProgramErrors>>(
    'createPrograms/createUserProgram',
    async (
        programData,
        thunkAPI,
    ) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;
        try {
            const fd = new FormData();
            fd.append('name', programData.name);
            fd.append('description', programData.description);
            fd.append('isPublic', programData.publicSetting);
            fd.append('image', programData.image || '');

            const response = await extra.api
                .post<Response>(
                    '/training-programs',
                    fd,
                );

            if (!response.data.data.success) {
                throw new Error('Error occurred');
            }

            if (programData.closeModal) {
                programData.closeModal();
            }

            dispatch(fetchUserPrograms());

            return response.data.data;
        } catch (err : any) {
            return rejectWithValue(err?.response.data.messages);
        }
    },
);
