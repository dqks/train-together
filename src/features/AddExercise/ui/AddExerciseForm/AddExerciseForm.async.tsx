import { lazy } from 'react';

export const AddExerciseFormAsync = lazy(() => new Promise((resolve) => setTimeout(
    // @ts-ignore
    resolve(import('./AddExerciseForm.tsx')), 2000)));
