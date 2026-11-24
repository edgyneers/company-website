// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // TODO: set to the real domain so canonical / hreflang URLs are absolute.
  site: "https://example.com",
  i18n: {
    defaultLocale: "id",
    locales: ["id", "en"],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: "always" },
  vite: { plugins: [tailwindcss()] },
});
