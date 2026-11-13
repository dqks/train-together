import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore, type CombinedState, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';
import type { StateSchema } from '@/app/providers/StoreProvider';
import { createReducerManager } from '@/app/providers/StoreProvider/config/reducerManager';
import { setupServer } from 'msw/node';
import {
    http,
    HttpResponse,
} from 'msw';

const handlers = [
    http.post('http://localhost:3000/auth/login', () => {
        return new HttpResponse({
            "resultCode": 400,
            "messages": {
                "status": [
                    "Неверная почта или пароль"
                ]
            },
        },
        {
            status: 400
        }
        );
    }),
];


const reducerManager = createReducerManager({
    user: userReducer
} as  ReducersMapObject<StateSchema>);

const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>
})

// @ts-ignore
store.reducerManager = reducerManager;
const server = setupServer(...handlers)

describe('button', () => {

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

     test('render', async () => {
        // arrange
        const user = userEvent.setup()

        render(
            <BrowserRouter>
                <Provider store={store}>
                    <LoginForm/>
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole("login")
        const loginInput = screen.getByRole("loginInput")
        
        // act
        user.click(loginButton)

        // assert
        expect(loginInput).toHaveValue("")
        screen.debug();

        const error = await screen.findByText("Все поля должны быть заполнены")
        expect(error).toBeInTheDocument();
    });
});
