import {
    describe, expect, test, vi,
} from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { LoginForm } from './LoginForm';
import { createReduxStore } from '@/app/providers/StoreProvider';
import { server } from '../../../../config/vitest/server';
import * as loginByEmail from '../model/services/loginByEmail/loginByEmail';
import { renderComponent } from '@/shared/lib/tests/renderComponent';

describe('login form', () => {
    test('all fields are empty', async () => {
        const store = createReduxStore();

        // arrange
        const user = userEvent.setup();
        const loginSpy = vi.spyOn(loginByEmail, 'loginByEmail');
        render(renderComponent(store, <LoginForm />));
        const loginButton = screen.getByRole('button', { name: /войти/i });

        // act
        await user.click(loginButton);

        // assert
        const errorEmptyFields = await screen.findByText('Все поля должны быть заполнены');
        const errorEmail = await screen.findByText('Почта должна быть валидной');
        expect(errorEmptyFields).toBeInTheDocument();
        expect(errorEmail).toBeInTheDocument();
        expect(loginSpy).not.toHaveBeenCalled();
    });

    test('password field is empty', async () => {
        const store = createReduxStore();

        // arrange
        const user = userEvent.setup();
        const loginSpy = vi.spyOn(loginByEmail, 'loginByEmail');
        render(renderComponent(store, <LoginForm />));

        const loginButton = screen.getByRole('button', { name: /войти/i });
        const emailInput = screen.getByRole('textbox', { name: /email/i });

        // act
        await user.type(emailInput, 'test@mail.ru');
        await user.click(loginButton);

        // assert
        const errorEmptyFields = await screen.findByText('Все поля должны быть заполнены');
        expect(errorEmptyFields).toBeInTheDocument();
        expect(loginSpy).not.toHaveBeenCalled();
    });

    test('email field is empty', async () => {
        const store = createReduxStore();
        // arrange
        const user = userEvent.setup();
        const loginSpy = vi.spyOn(loginByEmail, 'loginByEmail');
        render(renderComponent(store, <LoginForm />));

        const loginButton = screen.getByRole('button', { name: /войти/i });
        const passwordField = screen.getByLabelText('Пароль');
        // act
        await user.type(passwordField, 'password');
        await user.click(loginButton);

        // assert
        const errorEmptyFields = await screen.findByText('Все поля должны быть заполнены');
        const errorEmail = await screen.findByText('Почта должна быть валидной');
        expect(errorEmptyFields).toBeInTheDocument();
        expect(errorEmail).toBeInTheDocument();
        expect(loginSpy).not.toHaveBeenCalled();
    });

    test('failed request', async () => {
        const store = createReduxStore();
        let resolveRequest!: () => void;
        const requestPaused = new Promise<void>((resolve) => {
            resolveRequest = resolve;
        });
        // arrange
        const user = userEvent.setup();
        render(renderComponent(store, <LoginForm />));

        const loginButton = screen.getByRole('button', { name: /войти/i });
        const emailField = screen.getByRole('textbox', { name: /email/i });
        const passwordField = screen.getByLabelText('Пароль');
        // act
        await user.type(emailField, 'test@mail.ru');
        await user.type(passwordField, 'password');

        server.use(
            http.post('*/auth/login', async () => {
                await requestPaused;
                return HttpResponse.json(
                    {
                        resultCode: 400,
                        messages: {
                            status: [
                                'Неверная почта или пароль',
                            ],
                        },
                    },
                    {
                        status: 400,
                    },
                );
            }),
        );

        await user.click(loginButton);

        // assert
        expect(loginButton).toHaveAttribute('disabled');
        resolveRequest();

        const error = await screen.findByRole('alert');
        expect(error).toBeInTheDocument();
    });

    test('success request', async () => {
        const store = createReduxStore();
        let resolveRequest!: () => void;
        const requestPaused = new Promise<void>((resolve) => {
            resolveRequest = resolve;
        });
        // arrange
        const user = userEvent.setup();
        render(renderComponent(store, <LoginForm />));

        const loginButton = screen.getByRole('button', { name: /войти/i });
        const emailField = screen.getByRole('textbox', { name: /email/i });
        const passwordField = screen.getByLabelText('Пароль');
        // act
        await user.type(emailField, 'test@mail.ru');
        await user.type(passwordField, 'password');

        server.use(
            http.post('*/auth/login', async () => {
                await requestPaused;
                return HttpResponse.json(
                    {
                        resultCode: 200,
                        messages: {},
                        data: {
                            id: 1,
                            nickname: 'testnickname',
                            email: 'test@mail.ru',
                        },
                    },
                    {
                        status: 200,
                    },
                );
            }),
        );
        await user.click(loginButton);

        // assert
        expect(loginButton).toHaveAttribute('disabled');

        resolveRequest();

        await waitFor(() => {
            expect(store.getState().user.id).toBe(1);
            expect(store.getState().user.nickname).toBe('testnickname');
        });

        const error = screen.queryByRole('alert');
        expect(error).not.toBeInTheDocument();
    });

    // test('internal server error', async () => {
    // });
});
