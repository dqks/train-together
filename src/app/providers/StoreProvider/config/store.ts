import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { createReducerManager } from './reducerManager';
import type { StateSchema } from './StateSchema';
import { userReducer } from '@/entities/User';
import { exerciseReducer } from '@/entities/Exercise';
import { programsReducer } from '@/widgets/ProgramsList';
import { registerReducer } from '@/features/RegisterForm';
import { loginReducer } from '@/features/LoginForm';
import { muscleReducer } from '@/features/MuscleFIlterList';
import { equipmentReducer } from '@/features/EquipmentFIterList';
import { createProgramReducer } from '@/features/AddMyProgram';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        exercise: exerciseReducer,
        programs: programsReducer,
        register: registerReducer,
        login: loginReducer,
        muscle: muscleReducer,
        equipment: equipmentReducer,
        createProgram: createProgramReducer,
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
