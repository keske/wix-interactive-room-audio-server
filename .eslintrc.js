module.exports = {
  env: {
    es6: true,
    node: true,
  },
  "parser": "babel-eslint",
    "extends": "airbnb/base",
    "rules": {
      "arrow-parens": ["error", "always"],
      "function-paren-newline": ["error", { "minItems": 3 }],
      "implicit-arrow-linebreak": 0,
      "function-paren-newline": 0,
      'no-console': 0,
    },
    "plugins": [
      "babel",
      "flowtype",
      "import"
    ],
};