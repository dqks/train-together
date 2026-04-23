import type { StateSchema } from '@/app/providers/StoreProvider';

export const getProgramDetails = (state: StateSchema) => state.program.programDetails;
