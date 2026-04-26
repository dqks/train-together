import type { StateSchema } from '@/app/providers/StoreProvider';

export const getFavouritePrograms = (state :StateSchema) => state.program.favouritePrograms;
