import { lazy } from "react";

export  const RegisterPageAsync = lazy(() => new Promise(resolve =>
    setTimeout(
        // @ts-ignore
        resolve(import("./RegisterPage.tsx")), 1000)));