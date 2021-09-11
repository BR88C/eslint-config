module.exports = {
    root: true,
    parser: `@typescript-eslint/parser`,
    extends: [
        `eslint:recommended`,
        `plugin:@typescript-eslint/recommended`
    ],
    plugins: [`@typescript-eslint`],
    rules: {
        '@typescript-eslint/no-empty-function': `off`,
        '@typescript-eslint/no-explicit-any': `off`,
        '@typescript-eslint/no-non-null-assertion': `off`,
        'array-bracket-newline': `warn`,
        'comma-spacing': `warn`,
        'eol-last': `warn`,
        eqeqeq: `warn`,
        'func-call-spacing': `warn`,
        indent: [`error`, 4, { SwitchCase: 1 }],
        'no-eval': `error`,
        'no-unreachable-loop': `error`,
        'no-unused-expressions': `warn`,
        'object-curly-newline': [
            `warn`, {
                ObjectExpression: { minProperties: 2 },
                ObjectPattern: { minProperties: 2 },
                ImportDeclaration: `never`,
                ExportDeclaration: { minProperties: 2 }
            }
        ],
        'object-curly-spacing': [`warn`, `always`],
        'prefer-arrow-callback': `warn`,
        'prefer-template': `error`,
        quotes: [`error`, `backtick`, `avoid-escape`],
        semi: [`error`, `always`]
    }
};
