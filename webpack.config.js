const { resolve } = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/",
  output: {
    library: "VueBottomSheet",
    libraryTarget: "commonjs2",
    filename: "vue-bottom-sheet.js",
    path: resolve("dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      { test: /\.js$/, loader: "babel-loader" },
      {
        test: /\.scss$/,
        loader: ["postcss-loader"]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        uglifyOptions: {
          warnings: false,
          compress: true,
          mangle: true,
          output: {
            comments: false
          }
        },
        sourceMap: false
      })
    ]
  }
};
