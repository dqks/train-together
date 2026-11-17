import type { AppStore } from "@/app/providers/StoreProvider/config/store"
import type { ReactNode } from "react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router"


export const renderComponent = (store: AppStore, children: ReactNode) => {
    return (
        <MemoryRouter>
            <Provider store={store}>
                { children }
            </Provider>
        </MemoryRouter>
    )
}