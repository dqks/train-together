import { configureStore, type CombinedState, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import type { StateSchema, ThunkExtraArg } from './StateSchema';
import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/api.ts';
import { programsReducer } from '@/entities/Program';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    // navigate? : (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        program: programsReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        // reducer: rootReducer,
        devTools: true,
        preloadedState: initialState,
        // @ts-ignore
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
