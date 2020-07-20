const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: process.env.NODE_ENV,
  output: {
    filename: "wind.bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "@shannonrothe/wind",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
