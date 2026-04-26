import { $api, type ResponseType } from '@/shared/api/api.ts';

type DeleteProgram = ResponseType<{success: boolean}, string>

export const deleteProgram = async (id: number) : Promise<DeleteProgram> => {
    const response = await $api
        .delete<DeleteProgram>(`/training-programs/${id}`);
    return response.data;
};
