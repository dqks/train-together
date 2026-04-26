import { lazy } from 'react';

export const FavouriteProgramsPageAsync = lazy(() => new Promise((resolve) => setTimeout(
    // @ts-ignore
    resolve(import('./FavouriteProgramsPage.tsx')), 1000)));
