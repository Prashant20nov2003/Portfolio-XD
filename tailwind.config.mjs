/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/container-queries'),
      require('tailwindcss-animate'),
      require('@tailwindcss/typography')
    ],
    prefix: 'tw-',
    corePlugins: {
      preflight: false,
    },
};