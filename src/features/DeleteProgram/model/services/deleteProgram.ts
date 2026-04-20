import { $api } from '@/shared/api/api.ts';

export const deleteProgram = async (id: number) => {
    try {
        return await $api.delete(`/training-programs/${id}`);
    } catch (e) {
        return e;
    }
};
