// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // 仅在生产构建时使用 base 路径（GitHub Pages 子路径部署）
  base: import.meta.env.PROD ? '/self-evolve-ai-site/' : undefined,
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});