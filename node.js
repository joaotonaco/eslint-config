module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ["standard", "plugin:prettier/recommended", "plugin:import/recommended"],
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
				singleQuote: true,
				trailingComma: "all",
				arrowParens: "always",
				semi: true,
			},
		],
	},
	settings: {
		"import/parsers": {
			[require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
		},
	},
};
