import { resolve } from "path";

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Your main index.html
        about: resolve(__dirname, "src/page2.html"), // Example: your about page
        // Add more entries for other HTML files as needed
      },
    },
  },
});
