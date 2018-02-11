 const { injectBabelPlugin } = require('react-app-rewired');
 const rewireMobX = require('react-app-rewire-mobx');


module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = rewireMobX(config, env);
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config)

    return config;
  };