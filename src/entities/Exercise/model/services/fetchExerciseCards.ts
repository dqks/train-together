import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { ExerciseCardInformation } from '../types/exerciseSchema.ts';

export const fetchExerciseCards = createAsyncThunk<ExerciseCardInformation[], null, {rejectValue: string}>(
    'exercise/fetchExerciseCards',
    async (_, thunkAPI) => {
        try {
            const response = await axios
                .get<ExerciseCardInformation[]>('http://localhost:8080/api/default-exercise');

            if (!response.data) {
                throw new Error('Error occured');
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
