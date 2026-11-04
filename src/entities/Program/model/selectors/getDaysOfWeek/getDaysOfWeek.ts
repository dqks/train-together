import type { StateSchema } from '@/app/providers/StoreProvider';

export const getDaysOfWeek = (state: StateSchema) => state.program.daysOfWeek;
