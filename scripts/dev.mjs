import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

const compiler = webpack({
  entry: "./src/main.tsx",
  output: {
    filename: "bundle.js",
    clean: true,
  },
  resolve: {
    extensions: [".tsx"], //这个是用来设置省略文件后缀名的
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                modules: false,
              },
            ],
            "@babel/preset-react",
          ],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./public/index.html",
    }),
  ],
});

const devServerOptions = { open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log("Starting server...");
  await server.start();
};

runServer();
