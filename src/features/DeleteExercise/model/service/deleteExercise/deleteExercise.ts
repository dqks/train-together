import { $api } from '@/shared/api/api.ts';

export const deleteExercise = async (id: number) => {
    try {
        return await $api.delete(`/exercises/${id}`);
    } catch (e) {
        return e;
    }
};
