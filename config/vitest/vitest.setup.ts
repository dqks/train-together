import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, 'src/app/styles'),
            // Конфиг лежит не в корне поэтому правим маршрут
            '@': path.resolve(__dirname, '../../src'),
        },
    },
    plugins: [svgr()],
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
