import type { StateSchema } from '@/app/providers/StoreProvider';

export const getEquipmentId = (state: StateSchema) => state.addExercise.equipmentId;
