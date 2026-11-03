import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.salahdaoud.com',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
});
