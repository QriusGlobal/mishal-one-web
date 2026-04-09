import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import compress from 'astro-compress';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
  site: 'https://mishal.one',
  output: 'static',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  integrations: [
    compress({
      CSS: {
        csso: { restructure: true, forceMediaMerge: true, comments: false },
      },
      HTML: {
        'html-minifier-terser': {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
        },
      },
      JavaScript: {
        terser: {
          compress: { drop_console: true, drop_debugger: true },
          format: { comments: false },
        },
      },
      SVG: {
        svgo: {
          plugins: [
            'preset-default',
            { name: 'removeViewBox', active: false },
            { name: 'removeTitle', active: false },
          ],
        },
      },
      Image: false,
    }),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
    icon({
      svgoOptions: {
        plugins: [
          'preset-default',
          { name: 'convertColors', params: { currentColor: true } },
        ],
      },
    }),
  ],
  server: { port: 4322, host: true },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@/': fileURLToPath(new URL('./src/', import.meta.url)),
      },
    },
  },
});
