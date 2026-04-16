import type { StateSchema } from '@/app/providers/StoreProvider';

export const getProgramPublicSetting = (state: StateSchema) => state.createProgram.publicSetting;
