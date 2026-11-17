import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import type { AppStore } from '@/app/providers/StoreProvider/config/store';

export const renderComponent = (store: AppStore, children: ReactNode) => (
    <MemoryRouter>
        <Provider store={store}>
            { children }
        </Provider>
    </MemoryRouter>
);
