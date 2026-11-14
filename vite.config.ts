import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import glsl from "vite-plugin-glsl";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

import type { Plugin } from "vite";

// GitHub Pages has no SPA rewrites. Serving index.html as 404.html lets deep
// links such as /project/parapizza load the app, which then reads the path.
const spaFallback = (): Plugin => ({
  name: "spa-fallback-404",
  apply: "build",
  closeBundle() {
    copyFileSync(resolve(__dirname, "dist/index.html"), resolve(__dirname, "dist/404.html"));
  },
});

export default defineConfig({
  // e.g. "/portfolio-2025/" when deployed to a GitHub Pages project site
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [
    vue(),
    spaFallback(),
    glsl({
      include: ["**/*.glsl", "**/*.vert", "**/*.frag"],
      defaultExtension: "glsl",
      warnDuplicatedImports: false,
    }),
  ],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".ogg", ".wav", ".glsl", ".ktx2"],
  },
  assetsInclude: ["**/*.svg", "**/*.gltf", "**/*.glb", "**/*.png", "**/*.jpg", "**/*.ktx2"],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/assets/styles/mixins.scss";`,
      },
    },
  },
  build: {
    outDir: "./dist",
    sourcemap: false,
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        assetFileNames: "assets/[hash].[ext]",
        entryFileNames: "chunks/[name]-[hash].js",
        chunkFileNames: "chunks/[hash].js",
      },
    },
  },
});
