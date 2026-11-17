import { afterAll, afterEach, beforeAll, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { server } from './server';

// $api.defaults.adapter = ''

beforeAll(() => 
    server.listen({
        onUnhandledRequest: 'error',
    })
)

afterEach(() => {
    cleanup();
    // Возвращаем оригинальную функцию, если использовали spy
    vi.restoreAllMocks()
    server.resetHandlers()
});


afterAll(() => {
    server.close()
})
