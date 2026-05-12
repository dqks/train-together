import { $api, type ResponseType } from '@/shared/api/api.ts';

export type UpdateExerciseBody = {
    id: number | undefined;
    image: File | undefined
    name: string | undefined
    // exerciseProgressionTypeId: string | undefined
    primaryMuscleId: string | undefined
    // secondaryMuscleIds: string[] | undefined
    equipmentId: string | undefined
}

export const updateExercise = async (body: UpdateExerciseBody) => {
    const fd = new FormData();
    fd.append('image', body?.image || '');
    fd.append('name', body?.name || '');
    fd.append('primaryMuscleId', body?.primaryMuscleId || '');
    fd.append('equipmentId', body?.equipmentId || '');

    const response = await $api.patch(`exercises/${body.id}`, fd);
    return response.data as ResponseType<{success: boolean}, string>;
};
