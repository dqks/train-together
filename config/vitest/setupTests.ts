import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup();
    // Возвращаем оригинальную функцию, если использовали spy
    vi.restoreAllMocks()
});

