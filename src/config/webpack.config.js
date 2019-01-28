const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "..", "build")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
