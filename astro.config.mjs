import { defineConfig } from 'astro/config';
// import remarkToc from "remark-toc";
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  markdown: {
    // remarkPlugins: [[remarkToc, { heading: "contents" }]],
    shikiConfig: {
      theme: 'nord',
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
