module.exports = {
  extends: 'airbnb',
  rules: {
    'no-console': 'off',
    'no-alert': 'off',
    'object-curly-newline': 'off',
    'prefer-arrow-callback': 'off',
    'import/prefer-default-export': 'off',
    'func-names': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prefer-stateless-function': 0,
    'arrow-parens': [2, 'always'],
    'jsx-a11y/label-has-associated-control': 0,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};
