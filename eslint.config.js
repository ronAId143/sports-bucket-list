// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import next from "eslint-config-next";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...next(),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "react/no-unescaped-entities": "warn",
      "quotes": ["warn", "double"],
    },
  },
  prettier,
];