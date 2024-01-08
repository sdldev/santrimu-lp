import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://santrimu.com",
  integrations: [tailwind(), sitemap(), react()],
  output: "server",
  adapter: cloudflare(),
});
