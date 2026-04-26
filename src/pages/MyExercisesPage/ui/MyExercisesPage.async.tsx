import { lazy } from 'react';

export const MyExercisesPageAsync = lazy(() => new Promise((resolve) => setTimeout(
    // @ts-ignore
    resolve(import('./MyExercisesPage.tsx')), 1000)));
