const WindiCSS = require("rollup-plugin-windicss");

module.exports = {
  rollup(config, options) {
    config.plugins.push(...WindiCSS.default());
    return config;
  },
};
