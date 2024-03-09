import { defineConfig } from "astro/config";
import { imageService } from "@unpic/astro/service";

export default defineConfig({
  image: {
    service: imageService({
      fallbackService: "netlify",
      placeholder: "blurhash",
      layout: "constrained",
    }),
  },
});
