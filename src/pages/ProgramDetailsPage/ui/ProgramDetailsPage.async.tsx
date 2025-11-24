import { lazy } from "react";

export  const ProgramDetailsPageAsync = lazy(() => new Promise(resolve =>
    setTimeout(
        // @ts-ignore
        resolve(import("./ProgramDetailsPage.tsx")), 1000)));