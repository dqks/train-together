import type { StateSchema } from '@/app/providers/StoreProvider';

export const getProgramErrors = (state :StateSchema) => state.program.error;
