import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/background.ts",
    output: [{ file: "extension/background.js", format: "iife", exports: "named" }],
    plugins: [
        resolve(),
        typescript({ rollupCommonJSResolveHack: true, clean: true }),
        copy({ targets: [{ src: "static/*", dest: "extension/" }] })
      ]
  },
  {
    input: "src/content.ts",
    output: [{ file: "extension/content.js", format: "iife", exports: "named" }],
    plugins: [resolve(), typescript({ rollupCommonJSResolveHack: true, clean: true })]
  },
  {
    input: "src/popup.ts",
    output: [{ file: "extension/popup.js", format: "iife", exports: "named" }],
    plugins: [resolve(), typescript({ rollupCommonJSResolveHack: true, clean: true })]
  }
];