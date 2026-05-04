import { lazy } from 'react';

export const EquipmentFilterContentAsync = lazy(() => new Promise((resolve) => setTimeout(
    // @ts-ignore
    resolve(import('./EquipmentFilterContent.tsx')), 5000)));
