import { createSlice } from '@reduxjs/toolkit';
import {
    fetchFavouritePrograms,
} from '../services/fetchFavouritePrograms/fetchFavouritePrograms.ts';
import type { FavouriteProgramSchema } from '../types/favouriteProgramsSchema.ts';

const initialState: FavouriteProgramSchema = {
    favouritePrograms: null,
    error: undefined,
    isLoading: false,
};

export const favouriteProgramsSlice = createSlice({
    name: 'program',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavouritePrograms.pending, (state, action) => {
                state.isLoading = true;
                state.error = action.payload;
            })
            .addCase(fetchFavouritePrograms.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchFavouritePrograms.fulfilled, (state, action) => {
                state.isLoading = false;
                state.favouritePrograms = action.payload;
            })
    },
});

export const { actions: favouriteProgramsActions } = favouriteProgramsSlice;
export const { reducer: favouriteProgramsReducer } = favouriteProgramsSlice;
