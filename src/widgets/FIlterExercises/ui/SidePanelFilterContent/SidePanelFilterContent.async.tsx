import { lazy } from 'react';

export const SidePanelFilterContentAsync = lazy(() => new Promise((resolve) => setTimeout(
    // @ts-ignore
    resolve(import('./SidePanelFilterContent.tsx')), 2000)));
