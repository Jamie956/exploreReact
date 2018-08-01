var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

var browserConfig = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js',
    // publicPath: '/'
    filename: "[name]-[chunkhash:8].js",
    chunkFilename: "[name]-[chunkhash:8]-chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0']
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    }),
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
    new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
      filename: 'manifest.js',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ]
}

var serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    // path: __dirname,
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    // publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0'],
            // plugins: ['react-loadable/babel']
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    }),
    // new ReactLoadablePlugin({
    //   filename: './public/react-loadable.json',
    // }),
  ]
}

module.exports = [browserConfig, serverConfig]

// module.exports = [browserConfig]