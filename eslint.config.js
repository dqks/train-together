import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import {defineConfig, globalIgnores} from 'eslint/config'
import i18nextPlugin from "eslint-plugin-i18next";
import react from "eslint-plugin-react"

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
    },
    {
        plugins: {
            i18next: i18nextPlugin,
        },
        rules: {
            "i18next/no-literal-string": "error",
        }
    },
    {
        plugins: {
            react,
            tseslint,
        },
        extends: [
            tseslint.configs.recommended
        ],
        rules: {
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            indent: [2, 4],
            'react/jsx-filename-extension': [
                2,
                {
                    extensions: ['.js', '.jsx', '.tsx'],
                }],
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'warn',
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'max-len': ['error', { ignoreComments: true }],
        }
    }
])
