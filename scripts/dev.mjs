import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compiler = webpack({
  mode: 'development',
  entry: './src/main.tsx',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts)?$/,
        exclude(modulePath) {
          return (
            /node_modules/.test(modulePath) && !/\/common\//.test(modulePath)
          )
        },
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(tsx)?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          // {
          //   loader: resolve(__dirname, '../loader/index.js'),
          // },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                [
                  '@babel/preset-typescript',
                  { isTSX: true, allExtensions: true },
                ],
              ],
              cacheDirectory: true,
              plugins: [
                ['babel-plugin-react-require'],
                [
                  'babel-plugin-import',
                  {
                    libraryName: 'antd',
                    style: true,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './public/index.html',
    }),
  ],
})

const devServerOptions = { open: false }
const server = new WebpackDevServer(devServerOptions, compiler)

const runServer = async () => {
  console.log('Starting server...')
  await server.start()
}

runServer()
