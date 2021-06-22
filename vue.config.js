const path = require("path");
// const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": resolve("src"),
        styles: resolve("src/assets/styles"),
        common: resolve("src/common"),
      },
    },
  },
};
