const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    'react-refresh': path.resolve(
      __dirname,
      'node_modules/react-refresh'
    ),
  })
);
