import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/dynamic-fitness-btm-layout-website/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});