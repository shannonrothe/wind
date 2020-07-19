const path = require("path");

module.exports = {
  entry: "./src/index.ts",
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
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
};
