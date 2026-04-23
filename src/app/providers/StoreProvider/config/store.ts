import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import type { StateSchema, ThunkExtraArg } from './StateSchema';
import { userReducer } from '@/entities/User';
import { exerciseReducer } from '@/entities/Exercise';
import { registerReducer } from '@/features/RegisterForm';
import { loginReducer } from '@/features/LoginForm';
import { createProgramReducer } from '@/features/AddMyProgram';
import { muscleReducer } from '@/entities/Muscle';
import { equipmentReducer } from '@/entities/Equipment';
import { $api } from '@/shared/api/api.ts';
import { addExerciseReducer } from '@/features/AddExercise';
import { exerciseTypeReducer } from '@/entities/ExerciseType';
import { exerciseProgressionReducer } from '@/entities/ExerciseProgression';
import { programsReducer } from '@/entities/Program';

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
        login: loginReducer,
        muscle: muscleReducer,
        equipment: equipmentReducer,
        createProgram: createProgramReducer,
        addExercise: addExerciseReducer,
        exerciseType: exerciseTypeReducer,
        exerciseProgression: exerciseProgressionReducer,
    };

    // const reducerManager = createReducerManager(rootReducer);

    const extraArg: ThunkExtraArg = {
        api: $api,
        // navigate,
    };

    const store = configureStore<StateSchema>({
        // reducer: reducerManager.reduce,
        reducer: rootReducer,
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
    // store.reducerManager = reducerManager;

    return store;
}
