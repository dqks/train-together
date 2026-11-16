import { StoreProvider } from "@/app/providers/StoreProvider"
import { BrowserRouter } from "react-router"
import { SubscribeProgram } from "./SubscribeProgram"
import { render, screen } from "@testing-library/react"

describe('subscribe button', () => {
    test("render subscribed", () => {

        render(
            <BrowserRouter>
                <StoreProvider>
                    <SubscribeProgram isSubscribed={false} programId={1}/>
                </StoreProvider>
            </BrowserRouter>
        )

        const text = screen.getByText("Добавить в избранное")
        expect(text).toBeInTheDocument()

    })
})