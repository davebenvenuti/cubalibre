const HTMLWebPackPlugin = require('html-webpack-plugin');
const { join } = require('path');

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
          loader: 'css-loader'
        }
      }
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: './src/html/index.html'
    })
  ],
  resolve: {
    extensions: [".css", ".jsx", ".js"]
  },
  entry: './src/js/index.jsx',
  devServer: {
    compress: true,
    port: 9000,
    host: "0.0.0.0",
    contentBase: join(__dirname, 'dist'),
    index: "index.html",
    watchContentBase: true,
    liveReload: true,
    inline: true
  }
};
