import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import { App } from "./app/App.tsx";

import './i18n/i18n.ts';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)