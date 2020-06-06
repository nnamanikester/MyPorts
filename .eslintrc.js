module.exports = {
  // extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/forbid-prop-types': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'react/jsx-wrap-multilines': 'off',
  },
  globals: {
    fetch: false,
  },
};
