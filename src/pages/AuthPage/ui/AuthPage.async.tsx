import { lazy } from "react";

export  const AuthPageAsync = lazy(() => new Promise(resolve =>
    setTimeout(
// @ts-ignore
        resolve(import("./AuthPage")), 1000)));