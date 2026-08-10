import { configureStore, type CombinedState, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import type { StateSchema, ThunkExtraArg } from './StateSchema';
import { userReducer } from '@/entities/User';
import { exerciseReducer } from '@/entities/Exercise';
import { registerReducer } from '@/features/RegisterForm';
import { muscleReducer } from '@/entities/Muscle';
import { equipmentReducer } from '@/entities/Equipment';
import { $api } from '@/shared/api/api.ts';
import { exerciseTypeReducer } from '@/entities/ExerciseType';
import { exerciseProgressionReducer } from '@/entities/ExerciseProgression';
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
        exercise: exerciseReducer,
        program: programsReducer,
        register: registerReducer,
        muscle: muscleReducer,
        equipment: equipmentReducer,
        exerciseType: exerciseTypeReducer,
        exerciseProgression: exerciseProgressionReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArg: ThunkExtraArg = {
        api: $api,
        // navigate,
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
