import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx() },
    react({
      include: /\.(mdx|js|jsx|ts|tsx)$/, // شامل کردن فایل‌ها برای Fast Refresh
      jsxImportSource: '@emotion/react', // تنظیم کارخانه JSX به '@emotion/react'
      jsxRuntime: 'classic', // استفاده از زمان اجرای کلاسیک
      babel: {
        presets: [
          '@babel/preset-react',
          '@babel/preset-env',
        ],
        plugins: [
          '@babel/plugin-transform-runtime',
          // افزونه‌های سفارشی دیگر
        ],
        babelrc: true, // استفاده از فایل‌های .babelrc
        configFile: true, // استفاده از فایل‌های babel.config.js
        parserOpts: {
          plugins: ['decorators-legacy'], // فعال کردن افزونه‌های نحوی
        },
      },
    }),
  ],
});
