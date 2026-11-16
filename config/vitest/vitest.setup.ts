import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, 'src/app/styles'),
            // Конфиг лежит не в корне поэтому правим маршрут
            '@': path.resolve(__dirname, '../../src'),
        },
    },
    plugins: [svgr(), react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './config/vitest/setupTests.ts',
        css: {
            include: /.+/,
            modules: {
                classNameStrategy: 'scoped',
            },
        },
    },
});
