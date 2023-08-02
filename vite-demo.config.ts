const path = require("path");
const { defineConfig } = require("vite");
import vue from "@vitejs/plugin-vue";

module.exports = defineConfig(() => {
  const rootPath = path.resolve(process.cwd());
  const srcPath = `${rootPath}/src`;
  return {
    server: {
      host: "localhost",
      port: "3002",
    },
    resolve: {
      alias: {
        "~": rootPath,
        "@": srcPath,
      },
    },
    plugins: [vue()], // to process SFC
  };
});
