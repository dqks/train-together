import { lazy } from 'react';

export const ProgramsPageAsync = lazy(() => new Promise((resolve) => setTimeout(
    // @ts-ignore
    resolve(import('./ProgramsPage.tsx')), 1000)));
