import type { StateSchema } from "@/app/providers/StoreProvider";

export const getIsInitializing = (state: StateSchema) => state?.profile?.isInitializing