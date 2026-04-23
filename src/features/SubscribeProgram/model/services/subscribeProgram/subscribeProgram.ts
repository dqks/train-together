import { $api } from '@/shared/api/api.ts';
import type { SubscribeResponseType } from '../../types/subscribeResponseType.ts';

export const subscribeProgram = async (id: number) : Promise<SubscribeResponseType> => {
    const response = await $api
        .post<SubscribeResponseType>(`/training-programs/subscribe/${id}`);
    return response.data;
};
