import type { StateSchema } from '@/app/providers/StoreProvider';

export const getProgramList = (state: StateSchema) => state.programs.programList;
