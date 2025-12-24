import type { StateSchema } from '@/app/providers/StoreProvider';

export const getEquipmentList = (state: StateSchema) => state.equipment.equipmentList;
