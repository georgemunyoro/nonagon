const pkg = require("./package.json");

module.exports = {
  title: pkg.name,

  webpackConfig: require("react-scripts/config/webpack.config"),
};
