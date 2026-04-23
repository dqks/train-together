import type { ResponseType } from '@/shared/api/api.ts';

export type SubscribeResponseType = ResponseType<{ success: boolean }, string>;
