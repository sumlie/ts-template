import globals from "globals";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJest from "eslint-plugin-jest";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  eslint.configs.recommended,
  {
    plugins: {
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          "newlines-between": "always",
          distinctGroup: true,
        },
      ],
    },
  },
  {
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.test.ts", "**/*.spec.ts"],
    plugins: {
      jest: eslintPluginJest,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  {
    ignores: ["node_modules", "dist", "build", "coverage"],
  },
];
