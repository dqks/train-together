import { lazy } from "react";

export  const ExerciseDetailsPageAsync = lazy(() => new Promise(resolve =>
    setTimeout(
        // @ts-ignore
        resolve(import("./ExerciseDetailsPage.tsx")), 1000)));