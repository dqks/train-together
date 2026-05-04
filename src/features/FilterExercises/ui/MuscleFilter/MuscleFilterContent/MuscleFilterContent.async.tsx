import { lazy } from 'react';

export const MuscleFilterContentAsync = lazy(() => new Promise((resolve) => setTimeout(
    // @ts-ignore
    resolve(import('./MuscleFilterContent.tsx')), 5000)));
