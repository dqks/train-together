import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { EditExerciseInit, EditExerciseSchema, ErrorObjectState } from "../types/editExerciseSchema"
import { updateExerciseThunk } from "../services/updateExercise/updateExercise";

const initialState: EditExerciseSchema = {
    name: "",
    equipmentId: "",
    errors: {},
    primaryMuscleId: "",
    status: 'editing',
    secondaryMuscleIds: []
}


export const editExerciseSlice = createSlice({
    initialState: initialState,
    name: "editExercice",
    reducers: {
        init: (state, action: PayloadAction<EditExerciseInit>) => {
            state.name = action.payload.name
            state.equipmentId = action.payload.equipmentId
            state.primaryMuscleId = action.payload.primaryMuscleId
            state.secondaryMuscleIds = action.payload.secondaryMuscleIds
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setEquipmentId: (state, action: PayloadAction<string>) => {
            state.equipmentId = action.payload
        },
        setPrimaryMuscleId: (state, action: PayloadAction<string>) => {
            state.primaryMuscleId = action.payload
        },
        setSecondaryMuscleIds: (state, action: PayloadAction<string>) => {
            const id = action.payload
            const isChecked = state.secondaryMuscleIds.indexOf(id, 0);
            if (isChecked !== -1) {
                state.secondaryMuscleIds.splice(isChecked, 1);
            } else {
                state.secondaryMuscleIds.push(id);
            }
        },
        setErrors: (state, action: PayloadAction<ErrorObjectState>) => {
            state.errors = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(updateExerciseThunk.pending, (state) => {
                state.status = "loading"
            })
            .addCase(updateExerciseThunk.rejected, (state, action) => {
                state.status = "editing"
                state.errors = action.payload
            })
            .addCase(updateExerciseThunk.fulfilled, (state) => {
                state.status = "success"
                state.errors = undefined
            })
    },
})

export const { reducer: editExerciseReducer } = editExerciseSlice
export const { actions: editExerciseActions } = editExerciseSlice