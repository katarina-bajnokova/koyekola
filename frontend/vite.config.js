import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    open: true,
  },
  preview: {
    port: 5173,
    host: true,
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/_globals.scss" as *;`,
      },
    },
  },
  build: {
    sourcemap: true,
  },
});
