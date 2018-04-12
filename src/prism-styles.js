/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import {colors} from 'theme';

console.log(require('glamor').styleSheet);

const prismColors = {
  char: '#D8DEE9',
  comment: '#999999',
  keyword: '#c5a5c5',
  lineHighlight: '#14161a',
  primitive: '#5a9bcf',
  string: '#8dc891',
  variable: '#d7deea',
  boolean: '#ff8b50',
  punctuation: '#5FB3B3',
  tag: '#fc929e',
  function: '#79b6f2',
  className: '#FAC863',
  method: '#6699CC',
  operator: '#fc929e',
};
export default {
  '.gatsby-highlight': {
    background: colors.dark,
    color: colors.white,
    borderRadius: 10,
    overflow: 'auto',
    tabSize: '1.5em',
  },
  [`
  .gatsby-highlight code[class*="gatsby-code-"],
  .gatsby-highlight pre[class*="gatsby-code-"],
  .gatsby-highlight pre.prism-code`]: {
    height: 'auto !important',
    margin: '1rem',
    fontSize: 14,
    lineHeight: '20px',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  },
  '.gatsby-highlight + .gatsby-highlight': {
    marginTop: 20,
  },
  '.gatsby-highlight-code-line': {
    backgroundColor: prismColors.lineHighlight,
    display: 'block',
    margin: '-0.125rem calc(-1rem - 15px)',
    padding: '0.125rem calc(1rem + 15px)',
  },
  '.token.attr-name': {
    color: prismColors.keyword,
  },
  [`
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata`]: {
    color: prismColors.comment,
  },
  [`
  .token.property,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol,
  .token.deleted`]: {
    color: prismColors.primitive,
  },
  [`.token.boolean`]: {
    color: prismColors.boolean,
  },

  [`.token.tag`]: {
    color: prismColors.tag,
  },

  [`.token.string`]: {
    color: prismColors.string,
  },

  [`.token.punctuation`]: {
    color: prismColors.punctuation,
  },

  [`
  .token.selector,
  .token.char,
  .token.builtin,
  .token.inserted`]: {
    color: prismColors.char,
  },

  [`.token.function`]: {
    color: prismColors.function,
  },

  [`
  .token.operator,
  .token.entity,
  .token.url,
  .token.variable`]: {
    color: prismColors.variable,
  },

  '.token.attr-value': {
    color: prismColors.string,
  },

  '.token.keyword': {
    color: prismColors.keyword,
  },

  [`
  .token.atrule,
  .token.class-name`]: {
    color: prismColors.className,
  },

  '.token.important': {
    fontWeight: 400,
  },

  '.token.bold': {
    fontWeight: 700,
  },

  '.token.italic': {
    fontStyle: 'italic',
  },

  '.token.entity': {
    cursor: 'help',
  },

  '.namespace': {
    opacity: 0.7,
  },
};
