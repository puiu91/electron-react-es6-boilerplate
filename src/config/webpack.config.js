const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const rootPath = path.resolve(__dirname, "..", "..");
const buildPath = path.resolve(__dirname, "../../build");

module.exports = {
  mode: "development",
  entry: "./src/app/index.jsx",
  output: {
    filename: "[name].bundle.js",
    path: buildPath
  },
  plugins: [
    new CleanWebpackPlugin(["build"], {
      root: rootPath
    }),
    new MiniCssExtractPlugin({
      filename: "./css/styles.css"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "../../public/index.ejs"),
      title: "electron app quick start",
      hash: true // suffixes asset filenames with a hash like `styles.css?564201b6c8cc6c0a1d8e` for cache busting
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve("src"),
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
