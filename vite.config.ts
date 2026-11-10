import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import removeAttr from '@castlenine/vite-plugin-remove-attribute';

export default defineConfig({
    plugins: [
        react(), 
        svgr(),
        removeAttr({
            attributes: ['data-testid'], 
            extensions: ['tsx'],
        }),
    ],
    
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@styles': path.resolve(__dirname, 'src/app/styles'),
        },
    },
});
