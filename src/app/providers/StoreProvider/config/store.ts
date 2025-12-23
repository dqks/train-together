import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { createReducerManager } from './reducerManager';
import type { StateSchema } from './StateSchema';
import { userReducer } from '@/entities/User';
import { exerciseReducer } from '@/entities/Exercise';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        exercise: exerciseReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        // reducer: reducerManager.reduce,
        reducer: rootReducer,
        devTools: true,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
