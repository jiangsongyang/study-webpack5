const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 9090,
    static: "./dist",
  },
  entry: {
    index: "./src/index.js",
  },
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "code split",
    }),
  ],
};
