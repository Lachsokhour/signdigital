/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/sign-portal',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [react()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
   resolve: {
    alias: {
      '@signdigital/shadcn-ui': resolve(__dirname, '../../libs/shadcn-ui/src/index.ts'),
      '@signdigital/shadcn-ui/*': resolve(__dirname, '../../libs/shadcn-ui/src/*'),
      '@signdigital/utils': resolve(__dirname, '../../libs/utils/src'),
      '@signdigital/utils/*': resolve(__dirname, '../../libs/utils/src/*'),
    },
  },
}));
