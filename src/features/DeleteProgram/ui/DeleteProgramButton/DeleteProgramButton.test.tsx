import { createReduxStore } from "@/app/providers/StoreProvider"
import { renderComponent } from "@/shared/lib/tests/renderComponent"
import { render, screen, waitFor } from "@testing-library/react"
import { DeleteProgramButton } from "./DeleteProgramButton"
import * as useNavigate from "react-router"
import { server } from "../../../../../config/vitest/server"
import { http, HttpResponse } from "msw"
import userEvent from "@testing-library/user-event"

describe("delete program button", () => {
    test('success', async () => {
        const store = createReduxStore()
        const navigateMock = vi.fn()
        const useNavigateSpy = vi.spyOn(useNavigate, 'useNavigate')
        useNavigateSpy.mockImplementation(() => navigateMock)
        // vi.mock('react-router', async () => {
        //     const actual = await vi.importActual('react-router');
        //     return {
        //         ...actual,
        //         useNavigate: () => navigateMock,
        //     };
        // });

        render(renderComponent(store, <DeleteProgramButton programId={1} redirectTo="/programs"/>))

        const user = userEvent.setup()
        const button = screen.getByRole("DeleteProgramButton")
        server.use(http.delete('*/training-programs/1', () => {
            return HttpResponse.json({data: {success: true}}, {status: 200})
        }))

        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent("Удалить программу")

        await user.click(button)

        await waitFor(() => {
            expect(navigateMock).toHaveBeenCalledOnce()
            expect(navigateMock).toHaveBeenCalledWith("/programs")
        })
    })

    test('failed', async () => {
        const store = createReduxStore()
        const navigateMock = vi.fn()
        const useNavigateSpy = vi.spyOn(useNavigate, 'useNavigate')
        useNavigateSpy.mockImplementation(() => navigateMock)

        render(renderComponent(store, <DeleteProgramButton programId={1} redirectTo="/programs"/>))

        const user = userEvent.setup()
        const button = screen.getByRole("DeleteProgramButton")
        server.use(http.delete('*/training-programs/1', () => {
            return HttpResponse.json({data: {success: false}}, {status: 400})
        }))

        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent("Удалить программу")

        await user.click(button)

        await waitFor(() => {
            expect(navigateMock).not.toHaveBeenCalled()
        })
    })
})