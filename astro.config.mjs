// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://resilient-rugelach-f1bf07.netlify.app',
  vite: {
    plugins: [tailwindcss()]
  }
});