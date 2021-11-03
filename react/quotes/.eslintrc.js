module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/state-in-constructor': [0],
    'jsx-a11y/label-has-associated-control': [2, {
      required: {
        every: ['nesting', 'id'],
      },
      allowChildren: true,
    }],
    'jsx-a11y/label-has-for': [2, {
      required: {
        every: ['nesting', 'id'],
      },
      allowChildren: true,
    }],
    'max-len': 'off',
  },
};
