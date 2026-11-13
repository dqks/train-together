import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { EditExerciseSchema, ErrorObjectState } from "../types/editExerciseSchema"
import { updateExerciseThunk } from "../services/updateExercise/updateExercise";
import { fetchExerciseDetails } from "@/entities/Exercise";

const initialState: EditExerciseSchema = {
    name: "",
    equipmentId: "",
    errors: {},
    primaryMuscleId: "",
    status: 'editing',
    userId: 0,
    imageUrl: "",
    secondaryMuscleIds: []
}

export const editExerciseSlice = createSlice({
    initialState: initialState,
    name: "editExercice",
    reducers: {
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
            .addCase(fetchExerciseDetails.pending, (state) => {
                state.status = "loading"
                console.log("editExercice pending");
            })
            .addCase(fetchExerciseDetails.rejected, (state, action) => {
                state.errors = action.payload
                console.log("editExercice rejected");
            })
            .addCase(fetchExerciseDetails.fulfilled, (state, action) => {
                state.status = "editing"
                state.userId = action.payload.userId || 0
                state.name = action.payload.name || ''
                state.equipmentId = action.payload.equipment.id.toString()
                state.primaryMuscleId = action.payload.primaryMuscle.id.toString()
                state.secondaryMuscleIds = action.payload.secondaryMuscles.map(s => s.id.toString()) || []
                state.imageUrl = action.payload.image
            })
    },
})

export const { reducer: editExerciseReducer } = editExerciseSlice
export const { actions: editExerciseActions } = editExerciseSlice