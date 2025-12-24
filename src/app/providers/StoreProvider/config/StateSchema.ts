import type {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import type { UserSchema } from '@/entities/User/model/types/userSchema.ts';
import type { ExerciseSchema } from '@/entities/Exercise';
import type { ProgramSchema } from '@/widgets/ProgramsList';
import type { RegisterSchema } from '@/features/RegisterForm';
import type { LoginSchema } from '@/features/LoginForm';
import type { MuscleSchema } from '@/features/MuscleFIlterList';
import type { EquipmentSchema } from '@/features/EquipmentFIterList';

export interface StateSchema {
    user: UserSchema
    exercise: ExerciseSchema
    programs: ProgramSchema
    register: RegisterSchema
    login: LoginSchema
    muscle: MuscleSchema
    equipment: EquipmentSchema
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
