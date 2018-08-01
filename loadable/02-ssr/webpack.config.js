var path = require("path");
var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");
const ReactLoadablePlugin = require("react-loadable/webpack")
  .ReactLoadablePlugin;
// const HtmlWebpackPlugin = require("html-webpack-plugin");

var clientConfig = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[chunkhash:8].js",
    chunkFilename: "[name]-[chunkhash:8]-chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react", "stage-0"]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isClient__: "true"
    }),
    new ReactLoadablePlugin({
      filename: "./dist/react-loadable.json"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      filename: "manifest.js",
      minChunks: Infinity
    }),
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "index.html"
    // })
  ]
};

var serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react", "stage-0"]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isClient__: "false"
    })
  ]
};

module.exports = [serverConfig, clientConfig];
