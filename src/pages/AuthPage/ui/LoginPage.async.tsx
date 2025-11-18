import { lazy } from "react";

export  const LoginPageAsync = lazy(() => new Promise(resolve =>
    setTimeout(
        // @ts-ignore
        resolve(import("./LoginPage.tsx")), 1000)));