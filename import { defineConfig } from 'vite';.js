import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'vite-plugin-purgecss',
      options: {
        targets: [
          'assets/**/*.{css,js,ts}',
          'components/**/*.{css,js,ts}',
          'app/**/*.{css,js,ts}',
        ],
        extract: true,
      },
    },
  ],
});