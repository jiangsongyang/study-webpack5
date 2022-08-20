const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 9090,
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    clean: true,
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
  },
  module: {
    rules: [],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "development",
    }),
  ],
};
