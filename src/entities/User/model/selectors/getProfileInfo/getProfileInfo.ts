import type { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileInfo = (state: StateSchema) => state.user.profileInfo;
