module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'standard-with-typescript',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {functions: true, classes: true, variables: false},
    ],
    'react/prop-types': 'off',
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/order': [
      'error',
      {
        pathGroups: [
          {pattern: 'react*', group: 'builtin', position: 'before'},
          {pattern: '@src/**', group: 'external', position: 'after'},
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {order: 'asc'},
      },
    ],
    'import/prefer-default-export': off,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
