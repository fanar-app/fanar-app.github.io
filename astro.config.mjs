import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fanar-app.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
