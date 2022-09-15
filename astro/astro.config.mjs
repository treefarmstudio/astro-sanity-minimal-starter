import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import sanity from 'astro-sanity';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-sanity-minimal-starter.netlify.app/',
  // Your public domain, e.g.: https://my-site.dev/
  integrations: [
    sitemap(),
    sanity({
      projectId: '8hj1t7km',
      dataset: 'production',
      apiVersion: 'v2021-03-25',
      useCdn: true,
    }),
  ],
});
