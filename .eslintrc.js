module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'eslint-plugin-import'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-console': 'error', // disallow the use of `console`
    camelcase: 'warn', // enforce camelcase naming convention
    'no-empty-function': 'warn', // disallow empty functions
    'no-nested-ternary': 'error', // disallow nested ternary expressions
    'no-return-await': 'error', // disallow unnecessary `return await`
    'require-await': 'error', // disallow async functions which have no `await` expression,
    'import/no-default-export': 'warn',
    'linebreak-style': ['error', 'unix'],
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
  },
}
