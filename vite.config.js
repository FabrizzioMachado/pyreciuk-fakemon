import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// Exporting Vite config with Vue, Babel, SCSS processing, and base URL
export default defineConfig({
    plugins: [
        vue(), // Vue plugin for processing .vue files
    ],
    resolve: {
        alias: {
        "@": path.resolve(__dirname, "src"), // Adds alias for easier import paths
        },
    },
  base: "/pyreciuk-fakemon/", // Set the base URL for deployment
});
