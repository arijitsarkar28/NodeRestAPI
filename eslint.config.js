const globals = require('globals');
const prettier = require('eslint-plugin-prettier');

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
      parser: require('@babel/eslint-parser'),
      parserOptions: {
        requireConfigFile: false,
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
      'no-var': 'error',
      'prefer-const': 'error',
      'prettier/prettier': 'error',
    },
  },
];
