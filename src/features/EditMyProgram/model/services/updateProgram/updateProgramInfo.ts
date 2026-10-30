import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api, type ResponseType } from '@/shared/api/api.ts';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { LoginErrors } from '@/features/LoginForm/model/types/loginSchema.ts';

type UpdateProgramInfoBody = {
    id?: number | undefined
    name?: string
    description?: string
    publicSetting?: 'true' | 'false',
    image?: File | undefined
    closeModal?: () => void
    diffId?: string
    goalId?: string
}

type UpdateProgramInfoResponse = ResponseType<{success: boolean}, string>

export const updateProgramInfo = createAsyncThunk<
    UpdateProgramInfoResponse,
    UpdateProgramInfoBody,
    ThunkConfig<LoginErrors>>(
        'editProgram/updateProgramInfo',
        async (
            programData,
            thunkAPI,
        ) => {
            const { rejectWithValue } = thunkAPI;
            try {
                const {
                    id,
                    name,
                    description,
                    publicSetting,
                    image,
                    goalId,
                    diffId,
                } = programData;

                const fd = new FormData();

                if (name) {
                    fd.append('name', name);
                }

                if (description) {
                    fd.append('description', description);
                }

                if (publicSetting) {
                    fd.append('isPublic', publicSetting);
                }

                if (goalId) {
                    fd.append('goalId', goalId);
                }

                if (diffId) {
                    fd.append('diffId', diffId);
                }

                fd.append('image', image || '');

                const response = await $api.patch(`/training-programs/${id}`, fd);
                return response.data;
            } catch (err: any) {
                return rejectWithValue(err.response.data.messages);
            }
        },
    );
