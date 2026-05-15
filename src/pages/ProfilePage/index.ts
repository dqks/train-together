import { ProfilePageAsync } from './ui/ProfilePage.async';

export { ProfilePageAsync as ProfilePage };

export type { ProfileSchema } from './model/types/profileSchema.ts';
export { profileReducer, profileActions } from './model/slice/profileSlice.ts';
