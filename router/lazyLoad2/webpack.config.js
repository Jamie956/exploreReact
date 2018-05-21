var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: "bundle.js",
    // chunkFilename: '[name].[chunkhash:5].chunk.js',

    filename: '[name].[chunkhash:8].bundle.js',
    chunkFilename: '[name]-[id].[chunkhash:8].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0']
          }
        }
      },
      {
				test: /\.bundle\.js$/,
				use: 'bundle-loader'
			}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
};