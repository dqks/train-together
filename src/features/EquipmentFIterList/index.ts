import type { EquipmentSchema } from './model/types/equipmentSchema.ts';
import { equipmentReducer } from '@/features/EquipmentFIterList/model/slice/equipmentSlice.ts';
import { EquipmentFilterList } from './ui/EquipmentFilterList.tsx';

export type { EquipmentSchema };
export { equipmentReducer, EquipmentFilterList };
