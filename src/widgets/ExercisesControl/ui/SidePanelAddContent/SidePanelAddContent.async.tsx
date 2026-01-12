import { lazy } from 'react';

export const SidePanelAddContentAsync = lazy(() => new Promise((resolve) => setTimeout(
    // @ts-ignore
    resolve(import('./SidePanelAddContent.tsx')), 2000)));
