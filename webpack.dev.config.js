const { resolve } = require("path");
const options = require("./webpack.config");

options.mode = "development";
options.entry = "./demo/";

options.output.filename = "demo.js";
options.output.libraryTarget = "var";
options.output.publicPath = "/dist";

options.devServer = {
  contentBase: [resolve(__dirname, "demo")],
  publicPath: "/dist"
};

module.exports = options;
