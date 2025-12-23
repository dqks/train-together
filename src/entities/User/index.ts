import { UserCard } from './ui/UserCard/UserCard';
import { UserInfo } from './ui/UserInfo/UserInfo';
import { UserCollapsedCard } from './ui/UserCollapsedCard/UserCollapsedCard';
import { userActions, userReducer } from './model/slice/userSlice.ts';
import type { UserSchema } from './model/types/userSchema.ts';

export {
    UserCard, UserInfo, UserCollapsedCard, userActions, userReducer,
};

export type {
    UserSchema,
};
