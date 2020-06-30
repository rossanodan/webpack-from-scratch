const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    // way to define what webpack has to do with certain files
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          // what loader (package that transpile JSX into JS) webpack has to run
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
