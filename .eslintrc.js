module.exports = {
    "env": {
        "browser": true,
    },
    "extends": [
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {},
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
    }
};
