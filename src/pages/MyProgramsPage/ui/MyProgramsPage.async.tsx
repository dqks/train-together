import { lazy } from 'react';

export const MyProgramsPageAsync = lazy(() => new Promise((resolve) => setTimeout(
    // @ts-ignore
    resolve(import('./MyProgramsPage.tsx')), 1000)));
