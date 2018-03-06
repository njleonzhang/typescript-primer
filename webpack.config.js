const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "./index.js",
    libraryTarget: "umd"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html'
    })
  ],
  devServer: {
    contentBase: './dist',
    open: false
  },
};
