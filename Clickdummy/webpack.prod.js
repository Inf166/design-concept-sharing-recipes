const path = require("path");
const { merge } = require('webpack-merge');

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "JavaScripts/production",
  output: {
    filename: "main-[hash].js",
    path: path.resolve(__dirname, "dist")
  },
});