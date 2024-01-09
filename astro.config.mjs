import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://santrimu.com",
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), sitemap(), mdx()],
  output: "hybrid",
  adapter: cloudflare()
});