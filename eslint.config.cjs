const eslintPluginAstro = require('eslint-plugin-astro');
module.exports = [
    ...js.configs.recommended,
    ...eslintPluginAstro.configs['flat/recommended'], // In CommonJS, the `flat/` prefix is required.
    {
        rules: {}
    }
];