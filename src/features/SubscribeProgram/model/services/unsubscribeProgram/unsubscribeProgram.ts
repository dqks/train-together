import { $api } from '@/shared/api/api.ts';
import type { SubscribeResponseType } from '../../types/subscribeResponseType.ts';

export const unsubscribeProgram = async (id: number) : Promise<SubscribeResponseType> => {
    const response = await $api
        .delete<SubscribeResponseType>(`/training-programs/subscribe/${id}`);
    return response.data;
};
