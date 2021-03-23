const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(css)$/,
        use: [
            MiniCssExtractPlugin.loader,
            "postcss-loader",
            "css-loader"
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Xendit Assignment",
      description: "Xendit Assignment",
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[hash].css",
    }),
  ],
}