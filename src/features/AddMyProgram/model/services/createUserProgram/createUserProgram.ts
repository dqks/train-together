import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import {
    fetchUserProgramList,
} from '@/widgets/ProgramsList/model/services/fetchUserProgramList/fetchUserProgramList.ts';

type Return = {
    success: boolean
}

type Response = {
    data: Return
}

type ArgType = {
    name: string
    description: string
    publicSetting: 'all' | 'me',
    openHandler?: () => void
}

export const createUserProgram = createAsyncThunk<Return, ArgType, ThunkConfig<string>>(
    'createPrograms/createUserProgram',
    async (
        programData,
        thunkAPI,
    ) => {
        const { extra, dispatch } = thunkAPI;
        try {
            const data = {
                name: programData.name,
                description: programData.description,
                isPublic: programData.publicSetting === 'all',
            };

            const response = await extra.api
                .post<Response>(
                    '/training-programs',
                    data,
                );

            if (!response.data.data.success) {
                throw new Error('Error occurred');
            }

            if (programData.openHandler) {
                programData.openHandler();
            }

            dispatch(fetchUserProgramList());

            return response.data.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
