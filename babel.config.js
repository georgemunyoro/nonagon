module.exports = {
  plugins: ["@babel/plugin-syntax-dynamic-import"],
  presets: ["@babel/preset-env", "@babel/preset-react"],
  env: {
    test: {
      plugins: ["dynamic-import-node"],
    },
  },
};
