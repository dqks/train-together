import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Exercise, ExerciseSchema } from '../types/exerciseSchema.ts';
import { fetchExerciseCards } from '../services/fetchExerciseCards/fetchExerciseCards.ts';
import type { StateSchema } from '@/app/providers/StoreProvider/index.ts';

const exercisesAdapter = createEntityAdapter<Exercise>({
    selectId: (e: Exercise) => e.id
})

export const {
  selectAll: getAllExercises,
  selectById: getExerciseById,
  selectTotal: getTotalExercises,
} = exercisesAdapter.getSelectors((state: StateSchema) => state.exercise || {ids: [], entities: {}});

export const exerciseSlice = createSlice({
    name: 'exercise',
    initialState: exercisesAdapter.getInitialState<ExerciseSchema>({
            error: undefined,
            isLoading: false,
            ids: [],
            entities: {},
        }
    ),
    reducers: {
        setExerciseCards: (state, action: PayloadAction<Exercise[]>) => {
            exercisesAdapter.setAll(state, action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExerciseCards.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchExerciseCards.fulfilled, (state, action) => {
                state.isLoading = false;
                exercisesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchExerciseCards.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
});

export const { actions: exerciseActions } = exerciseSlice;
export const { reducer: exerciseReducer } = exerciseSlice;
