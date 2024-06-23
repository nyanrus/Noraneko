import { defineConfig } from "vite";
import path from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";
import solidPlugin from "vite-plugin-solid";

const r = (dir: string) => {
  return path.resolve(import.meta.dirname, dir);
};

export default defineConfig({
  root: r("src"),
  publicDir: r("public"),
  build: {
    sourcemap: true,
    reportCompressedSize: false,
    minify: false,
    cssMinify: false,
    emptyOutDir: true,
    assetsInlineLimit: 0,
    modulePreload: false,

    rollupOptions: {
      //https://github.com/vitejs/vite/discussions/14454
      preserveEntrySignatures: "allow-extension",
      input: {
        index: "src/index.ts",
      },
      output: {
        esModule: true,
        entryFileNames: "[name].js",
      },
    },
    outDir: r("dist/noraneko"),
  },
  //? https://github.com/parcel-bundler/lightningcss/issues/685
  //? lepton uses System Color and that occurs panic.
  //? when the issue resolved, gladly we can use lightningcss
  // css: {
  //   transformer: "lightningcss",
  // },

  plugins: [
    tsconfigPaths(),

    solidPlugin({
      solid: {
        generate: "universal",
        moduleName: "@nora/solid-xul",
      },
    }),
  ],
  // resolve: {
  //   preserveSymlinks: true,
  // },
});
