import { RegisterForm } from './ui/RegisterForm.tsx';
import type { RegisterSchema } from './model/types/registerSchema.ts';
import { registerReducer } from './model/slice/registerSlice.ts';

export { RegisterForm, registerReducer };
export type { RegisterSchema };
