module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ["standard", "plugin:prettier/recommended", "plugin:import/recommended", "plugin:import/typescript"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "import"],
	rules: {
		"@typescript-eslint/no-unused-vars": [
			1,
			{ args: "after-used", argsIgnorePattern: "^_" },
		],
		"prettier/prettier": [
			"error",
			{
				printWidth: 80,
				tabWidth: 2,
				singleQuote: false,
				trailingComma: "all",
				arrowParens: "always",
				semi: true,
			},
		],
		"import/order": [
      "warn",
      {
        "groups": [
          ["builtin", "external"],
          "internal",
          "type",
          "parent",
          ["sibling", "index"],
          "object"
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ]
	},
	settings: {
		"import/resolver": {
			typescript: true,
			node: true
		},
		"import/parsers": {
			[require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
		},
	},
};
