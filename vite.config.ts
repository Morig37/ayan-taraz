import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx() },
    react({
      include: /\.(mdx|js|jsx|ts|tsx)$/,
      jsxImportSource: '@emotion/react',
      jsxRuntime: 'automatic',
      babel: {
        presets: [
          '@babel/preset-react',
          '@babel/preset-env',
        ],
        plugins: [
          '@babel/plugin-transform-runtime',
        ],
        babelrc: true,
        configFile: true,
        parserOpts: {
          plugins: ['decorators-legacy'],
        },
      },
    }),
  ],
});
