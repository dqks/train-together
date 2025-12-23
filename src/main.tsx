import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { App } from './app/App.tsx';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import './shared/config/i18n/i18n.ts';

createRoot(document.getElementById('root')!).render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
);
