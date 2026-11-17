import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import type { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { vi } from 'vitest';
import { createReduxStore, type StateSchema } from '@/app/providers/StoreProvider';
import { SubscribeProgram } from './SubscribeProgram';
import { server } from '../../../../config/vitest/server';
import { programsDetailsReducer } from '@/entities/Program';
import { renderComponent } from '@/shared/lib/tests/renderComponent';
import * as unsubscribeProgram from '../model/services/unsubscribeProgram/unsubscribeProgram';
import * as subscribeProgram from '../model/services/subscribeProgram/subscribeProgram';

const initialState: DeepPartial<StateSchema> = {
    programDetails: {
        error: undefined,
        isLoading: false,
        programDetails: {
            createdAt: '',
            days: [],
            description: '',
            difficulty: {
                id: 1,
                level: 2,
                name: '',
                nameEng: '',
            },
            followsCount: 2,
            goal: {
                id: 1,
                name: '',
                nameEng: '',
                sortOrder: 0,
            },
            id: 1,
            imageUrl: '',
            isFollowed: false,
            isPublic: true,
            name: '',
            user: {
                avatarUrl: '',
                id: 1,
                nickname: '',
                programsCount: 2,
            },
        },
    },
};

describe('subscribe button', () => {
    test('subscribe', async () => {
        const store = createReduxStore(
            initialState as StateSchema,
            {
                programDetails: programsDetailsReducer,
            } as ReducersMapObject<StateSchema> | undefined,
        );

        render(renderComponent(store, <SubscribeProgram isSubscribed={false} programId={1} />));

        const user = userEvent.setup();
        const button = screen.getByRole('button');
        server.use(http.post('*/training-programs/subscribe/1', async () => HttpResponse.json({
            data: {
                success: true,
            },
        }, {
            status: 200,
        })));

        //
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Добавить в избранное');
        await user.click(button);

        await waitFor(() => {
            expect(store.getState().programDetails?.programDetails?.isFollowed).toBe(true);
        });
    });

    test('unsubscribe', async () => {
        const store = createReduxStore(
            {
                ...initialState,
                programDetails: {
                    programDetails: {
                        isFollowed: true,
                    },
                },
            } as StateSchema,
            {
                programDetails: programsDetailsReducer,
            } as ReducersMapObject<StateSchema> | undefined,
        );
        render(renderComponent(store, <SubscribeProgram isSubscribed programId={1} />));

        server.use(http.delete(
            '*/training-programs/subscribe/1',
            () => HttpResponse.json({ data: { success: true } }, { status: 200 }),
        ));

        const user = userEvent.setup();
        const button = screen.getByRole('button', { name: 'Удалить из избранного' });

        await user.click(button);

        await waitFor(() => {
            expect(store.getState().programDetails?.programDetails?.isFollowed).toBe(false);
        });
    });

    test('undefined program id unsubscribe', async () => {
        const store = createReduxStore(
            {
                ...initialState,
                programDetails: {
                    programDetails: {
                        isFollowed: true,
                    },
                },
            } as StateSchema,
            {
                programDetails: programsDetailsReducer,
            } as ReducersMapObject<StateSchema> | undefined,
        );
        render(renderComponent(store, <SubscribeProgram isSubscribed programId={undefined} />));

        const spyUnsubscribe = vi.spyOn(unsubscribeProgram, 'unsubscribeProgram');
        const spySubscribe = vi.spyOn(subscribeProgram, 'subscribeProgram');

        const user = userEvent.setup();
        const button = screen.getByRole('button', { name: 'Удалить из избранного' });

        await user.click(button);

        expect(spyUnsubscribe).not.toHaveBeenCalled();
        expect(spySubscribe).not.toHaveBeenCalled();
    });

    test('undefined program id subscribe', async () => {
        const store = createReduxStore(
            {
                ...initialState,
                programDetails: {
                    programDetails: {
                        isFollowed: true,
                    },
                },
            } as StateSchema,
            {
                programDetails: programsDetailsReducer,
            } as ReducersMapObject<StateSchema> | undefined,
        );
        render(renderComponent(store, <SubscribeProgram isSubscribed={false} programId={undefined} />));

        const spyUnsubscribe = vi.spyOn(unsubscribeProgram, 'unsubscribeProgram');
        const spySubscribe = vi.spyOn(subscribeProgram, 'subscribeProgram');

        const user = userEvent.setup();
        const button = screen.getByRole('button', { name: 'Добавить в избранное' });
        expect(button).toBeInTheDocument();

        await user.click(button);

        expect(spyUnsubscribe).not.toHaveBeenCalled();
        expect(spySubscribe).not.toHaveBeenCalled();
    });
});
