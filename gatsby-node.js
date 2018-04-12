/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

'use strict';

exports.modifyWebpackConfig = require('./gatsby/modifyWebpackConfig');
exports.createPages = require('./gatsby/createPages');
exports.onCreateNode = require('./gatsby/onCreateNode');
exports.onCreatePage = require('./gatsby/onCreatePage');

exports.modifyBabelrc = ({babelrc}) => {
  return {
    ...babelrc,
    plugins: babelrc.plugins.concat([
      [`transform-react-jsx`, {pragma: `EmotionJSX`}],
    ]),
  };
};
