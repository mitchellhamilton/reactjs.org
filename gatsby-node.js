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
      [`transform-react-jsx`, {pragma: `___EmotionJSX`}],
      [
        'babel-plugin-jsx-pragmatic',
        {
          export: 'jsx',
          module: '@emotion/core',
          import: '___EmotionJSX',
        },
      ],
      process.env.NODE_ENV === 'production'
        ? ['@emotion/babel-plugin-core', {jsx: true}]
        : ['@emotion/babel-plugin-core', {jsx: true, sourceMap: true}],
    ]),
  };
};
