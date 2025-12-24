import { createSlice } from '@reduxjs/toolkit';
import type { EquipmentSchema } from '../types/equipmentSchema.ts';
import { fetchEquipmentList } from '@/features/EquipmentFIterList/model/services/fetchEquipmentList/fetchEquipmentList.ts';

const initialState: EquipmentSchema = {
    equipmentList: null,
    error: undefined,
    isLoading: false,
};

export const equipmentSlice = createSlice({
    name: 'equipment',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEquipmentList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEquipmentList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.equipmentList = action.payload;
            })
            .addCase(fetchEquipmentList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: equipmentActions } = equipmentSlice;
export const { reducer: equipmentReducer } = equipmentSlice;
