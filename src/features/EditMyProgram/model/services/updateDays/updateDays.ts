import { $api, type ResponseType } from '@/shared/api/api.ts';

type UpdateDaysBody = {
    programId: number | undefined;
    details: {
        dayId: number;
        name: string;
        description: string;
        exercises: {
            exerciseId: number
            sets: number
            reps: number
            exerciseOrder: number
        }
    }
}

export const updateDays = async (daysData: UpdateDaysBody) => {
    const {
        programId,
    } = daysData;

    const response = await $api.put(`/training-programs/${programId}`, {});
    return response.data as ResponseType<{success: boolean}, string>;
};
