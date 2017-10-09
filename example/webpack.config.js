module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js"],
  },
};
