import { defineConfig } from "vite";
import { resolve } from "path";
import glob from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {},
    },
    root: resolve(__dirname, "src"),
    build: {
      sourcemap: true,
      outDir: "../dist",
      rollupOptions: {
        input: glob.sync("./src/*.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: "commonHelpers.js",
        },
      },
    },
    plugins: [injectHTML(), FullReload(["./src/**/**.html"])],
    server: {
      port: 1234,
    },
  };
});
