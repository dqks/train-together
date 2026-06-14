import { $api, type ResponseType } from '@/shared/api/api.ts';

type UpdateDaysRequest = {
    programId: number | undefined;
    details: {
        dayId: number;
        name: string;
        description: string | undefined;
        exercises: Array<{
            exerciseId: number
            sets: number
            reps: number
            exerciseOrder: number
        }>
    }[] | undefined
}

export const updateDays = async (daysData: UpdateDaysRequest) => {
    const body = { details: daysData.details };

    const response = await $api.put(
        `/training-programs/${daysData.programId}`,
        body,
    );
    return response.data as ResponseType<{success: boolean}, string>;
};
