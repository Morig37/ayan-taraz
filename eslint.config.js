import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['dist'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        AudioWorkletGlobalScope: true,
      },
      sourceType: 'module',
      parser: typescriptParser,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
      noInlineConfig: false,
    },
    maxWarnings: 0, // Moved to root level
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescriptEslint,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescriptEslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/prop-types': 'off',
    },
  },
];
