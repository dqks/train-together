import { lazy } from "react";

export  const LandingPageAsync = lazy(() => new Promise(resolve =>
    setTimeout(
// @ts-ignore
        resolve(import("./LandingPage.tsx")), 1000)));