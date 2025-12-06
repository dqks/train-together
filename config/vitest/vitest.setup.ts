import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
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
