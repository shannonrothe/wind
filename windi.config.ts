import { defineConfig } from "windicss/helpers";

defineConfig({
  extract: {
    include: ["src/**/*.{tsx}"],
    exclude: ["node_modules", ".git"],
  },
});
