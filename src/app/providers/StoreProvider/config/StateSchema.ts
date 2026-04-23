import type {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';
import type { UserSchema } from '@/entities/User/model/types/userSchema.ts';
import type { ExerciseSchema } from '@/entities/Exercise';
import type { RegisterSchema } from '@/features/RegisterForm';
import type { LoginSchema } from '@/features/LoginForm';
import type { CreateProgramSchema } from '@/features/AddMyProgram';
import type { MuscleSchema } from '@/entities/Muscle';
import type { EquipmentSchema } from '@/entities/Equipment';
import type { AddExerciseSchema } from '@/features/AddExercise/model/types/addExerciseSchema.ts';
import type { ExerciseTypeSchema } from '@/entities/ExerciseType';
import type { ExerciseProgressionSchema } from '@/entities/ExerciseProgression';
import type { ProgramSchema } from '@/entities/Program';

export interface StateSchema {
    user: UserSchema
    exercise: ExerciseSchema
    program: ProgramSchema
    register: RegisterSchema
    login: LoginSchema
    muscle: MuscleSchema
    equipment: EquipmentSchema
    createProgram: CreateProgramSchema
    addExercise: AddExerciseSchema
    exerciseType: ExerciseTypeSchema
    exerciseProgression: ExerciseProgressionSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    // navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
