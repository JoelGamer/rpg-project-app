module.exports = {
  env: { es6: true },
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/jsx-boolean-value": ["error", "never"]
  }
};
