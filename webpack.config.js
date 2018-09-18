const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    "react-intl": "./src/react-intl.js",
    "react-i18next": "./src/react-i18next.js",
    "polyglot": "./src/polyglot.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist")
  },
  plugins: [
    new CleanWebpackPlugin(["./dist"], { verbose: false }),
  ],
  externals: {
    react: { commonjs: 'react' },
  },
};
