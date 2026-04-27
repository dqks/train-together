import type { StateSchema } from '@/app/providers/StoreProvider';

export const getProgramImage = (state: StateSchema) => state.createProgram.image;
