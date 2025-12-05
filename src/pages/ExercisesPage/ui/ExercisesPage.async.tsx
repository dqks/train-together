import { lazy } from 'react';

export const ExercisesPageAsync = lazy(() => new Promise((resolve) => setTimeout(
    // @ts-ignore
    resolve(import('./ExercisesPage.tsx')), 1000)));
