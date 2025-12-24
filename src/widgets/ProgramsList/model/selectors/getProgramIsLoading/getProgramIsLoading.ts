import type { StateSchema } from '@/app/providers/StoreProvider';

export const getProgramIsLoading = (state: StateSchema) => state.programs.isLoading;
