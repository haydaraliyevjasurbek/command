import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/project-name/", // GitHub Pages uchun kerak, Vercel uchun odatda "/" bo‘lsa yetarli
});
