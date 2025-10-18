// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // or react, svelte, etc.

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [vue()],
  server: {
    port: 3000,
    open: true,
  },
});
