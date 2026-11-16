import { afterAll, afterEach, beforeAll, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { server } from './server';
import { $api } from "../../src/shared/api/api"

$api.defaults.adapter = 'http'

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
