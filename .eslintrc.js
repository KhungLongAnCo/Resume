module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["airbnb", "react-app", "plugin:react/recommended", "prettier"],
  plugins: ["react", "@typescript-eslint", "prettier", "jsx-a11y", "import"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/prop-types": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "import/no-unresolved": [
      "error",
      {
        ignore: [".svg"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    camelcase: "off",
    "jsx-a11y/no-static-element-interactions": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {},
    },
  },
}
