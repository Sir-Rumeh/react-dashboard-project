module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "airbnb"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"react/function-component-definition": 0,
		"import/extensions": 0,
		"react/prop-types": 0,
		indent: "off",
		"react/jsx-indent": 0,
		"react/jsx-indent-props": "off",
		"react/jsx-no-constructed-context-values": "off",
		"max-len": "off",
		"no-mixed-spaces-and-tabs": 0,
		"linebreak-style": 0,
		"react/state-in-constructor": 0,
		"import/prefer-default-export": 0,
		"no-tabs": ["off", { allowIndentationTabs: true }],
		quotes: [0, "single", { avoidEscape: true, allowTemplateLiterals: true }],
		"operator-linebreak": [0, "before", { overrides: { "?": "after" } }],
		"react/jsx-props-no-spreading": "off",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
				maxEOF: 1,
			},
		],
		"no-underscore-dangle": [
			"error",
			{
				allow: ["_d", "_dh", "_h", "_id", "_m", "_n", "_t", "_text"],
			},
		],
		"object-curly-newline": 0,
		"react/jsx-filename-extension": 0,
		"react/jsx-one-expression-per-line": 0,
		"jsx-a11y/click-events-have-key-events": 0,
		"jsx-a11y/alt-text": 0,
		"jsx-a11y/no-autofocus": 0,
		"jsx-a11y/no-static-element-interactions": 0,
		"react/no-array-index-key": 0,
		"jsx-a11y/anchor-is-valid": [
			"error",
			{
				components: ["Link"],
				specialLink: ["to", "hrefLeft", "hrefRight"],
				aspects: ["noHref", "invalidHref", "preferButton"],
			},
		],
	},
};
