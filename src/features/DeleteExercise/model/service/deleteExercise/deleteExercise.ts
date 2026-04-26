import { $api, type ResponseType } from '@/shared/api/api.ts';

type DeleteExercise = ResponseType<{success: boolean}, string>

export const deleteExercise = async (id: number) => {
    const response = await $api.delete<DeleteExercise>(`/exercises/${id}`);
    return response.data;
};
