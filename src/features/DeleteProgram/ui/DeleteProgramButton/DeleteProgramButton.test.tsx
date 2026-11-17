import { render, screen, waitFor } from '@testing-library/react';
import * as useNavigate from 'react-router';
import { http, HttpResponse } from 'msw';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { createReduxStore } from '@/app/providers/StoreProvider';
import { renderComponent } from '@/shared/lib/tests/renderComponent';
import { DeleteProgramButton } from './DeleteProgramButton';
import { server } from '../../../../../config/vitest/server';

describe('delete program button', () => {
    test('success', async () => {
        const store = createReduxStore();
        const navigateMock = vi.fn();
        const useNavigateSpy = vi.spyOn(useNavigate, 'useNavigate');
        useNavigateSpy.mockImplementation(() => navigateMock);

        render(renderComponent(store, <DeleteProgramButton programId={1} redirectTo="/programs" />));

        const user = userEvent.setup();
        const button = screen.getByRole('button', { name: 'Удалить программу' });
        server.use(http.delete(
            '*/training-programs/1',
            () => HttpResponse.json({ data: { success: true } }, { status: 200 }),
        ));

        expect(button).toBeInTheDocument();

        await user.click(button);

        await waitFor(() => {
            expect(navigateMock).toHaveBeenCalledOnce();
            expect(navigateMock).toHaveBeenCalledWith('/programs');
        });
    });

    test('failed to unsubscribe', async () => {
        const store = createReduxStore();
        const navigateMock = vi.fn();
        const useNavigateSpy = vi.spyOn(useNavigate, 'useNavigate');
        useNavigateSpy.mockImplementation(() => navigateMock);

        render(renderComponent(store, <DeleteProgramButton programId={1} redirectTo="/programs" />));

        const user = userEvent.setup();
        const button = screen.getByRole('button', { name: 'Удалить программу' });
        server.use(
            http.delete(
                '*/training-programs/1',
                () => HttpResponse.json({ data: { success: false } }, { status: 400 }),
            ),
        );

        expect(button).toBeInTheDocument();

        await user.click(button);

        await waitFor(() => {
            expect(navigateMock).not.toHaveBeenCalled();
        });
    });

    test('failed to subscribe', async () => {
        const store = createReduxStore();
        const navigateMock = vi.fn();
        const useNavigateSpy = vi.spyOn(useNavigate, 'useNavigate');
        useNavigateSpy.mockImplementation(() => navigateMock);

        render(renderComponent(store, <DeleteProgramButton programId={1} redirectTo="/programs" />));

        const user = userEvent.setup();
        const button = screen.getByRole('button', { name: 'Удалить программу' });
        server.use(
            http.post(
                '*/training-programs/1',
                () => HttpResponse.json({ data: { success: false } }, { status: 400 }),
            ),
        );

        expect(button).toBeInTheDocument();

        await user.click(button);

        await waitFor(() => {
            expect(navigateMock).not.toHaveBeenCalled();
        });
    });
});
