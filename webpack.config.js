const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname , "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader")
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src','index.html'),
    }),
  ],
  devServer: {
    contentBase: "./dist",
    hot: true
  }
};