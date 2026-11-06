import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api, type ResponseType } from '@/shared/api/api.ts';
import type { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema.ts';
import type { EditProgramErrorInfo } from '../../types/editProgramSchema';

type UpdateProgramInfoBody = {
    id?: number | undefined
    name?: string
    description: string | null
    publicSetting?: 'true' | 'false',
    image: File | string | undefined
    closeModal?: () => void
    diffId?: string
    goalId?: string
}

type UpdateProgramInfoResponse = ResponseType<{success: boolean}, string>

export const updateProgramInfo = createAsyncThunk<
    UpdateProgramInfoResponse,
    UpdateProgramInfoBody,
    ThunkConfig<EditProgramErrorInfo>>(
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
                } else {
                    fd.append('description', '');
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

                if (image instanceof File) {
                    fd.append('image', image);
                } else if (!image) {
                    fd.append('image', '');
                }

                const response = await $api.patch(`/training-programs/${id}`, fd);
                return response.data;
            } catch (err: any) {
                return rejectWithValue(err.response.data.messages);
            }
        },
    );
