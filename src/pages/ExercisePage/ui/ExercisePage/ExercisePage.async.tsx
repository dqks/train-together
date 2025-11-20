import { lazy } from "react";

export  const ExercisePageAsync = lazy(() => new Promise(resolve =>
    setTimeout(
// @ts-ignore
        resolve(import("./ExercisePage.tsx")), 1000)));