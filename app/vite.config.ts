import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../assets",
    assetsDir: "",
    rollupOptions: {
      input: {
        app: "./src/main.tsx",
      },
      output: {
        entryFileNames: `js/[name].build.js`,
        assetFileNames: `css/[name].build.[ext]`,
      },
    },
  },
});
