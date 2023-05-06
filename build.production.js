import path, { dirname } from "path";
import { fileURLToPath } from "url";

import * as esbuild from "esbuild";

import copy from "esbuild-copy-files-plugin";
import aliasPlugin from "esbuild-plugin-path-alias";
import { buildEnvironment } from "./build.environment.js";
import { glob } from "glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isDevMode = process.env.NODE_ENV === "development";

const getGlobFiles = async (directory, ignore = null) => {
  const files = await glob(directory, { ignore: ignore });
  return files;
};

const runBuild = async () => {
  const components = await getGlobFiles("./src/components/**/*.ts");
  const plugins = [
    buildEnvironment({ environment: "production" }),
    aliasPlugin({
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/services": path.resolve(__dirname, "./src/services"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
    }),
    copy({
      source: ["./src/assets"],
      target: "./dist",
      copyWithFolder: true,
    }),
  ];

  esbuild.build({
    plugins,
    supported: {
      "dynamic-import": true,
    },
    platform: "browser",
    format: "esm",
    bundle: true,
    write: true,
    entryPoints: ["src/main.ts", ...components],
    tsconfig: "./tsconfig.json",
    outdir: "./dist",
    external: ["http", "canvas", "global-jsdom", "global-jsdom/register"],

    keepNames: true,
    treeShaking: !isDevMode,
    sourcemap: isDevMode,
    minify: !isDevMode,
    target: isDevMode ? ["esnext"] : ["es2018"],
    loader: {
      ".png": "dataurl",
      ".jpg": "file",
      ".jpeg": "file",
      ".svg": "text",
    },
  });
};

runBuild();
