const { resolve } = require("path");
const options = require("./webpack.config");

options.mode = "development";
options.entry = "./dev/";

options.output.filename = "dev.js";
options.output.libraryTarget = "var";
options.output.publicPath = "/dist";

options.devServer = {
  contentBase: [resolve(__dirname, "dev")],
  publicPath: "/dist"
};

module.exports = options;
