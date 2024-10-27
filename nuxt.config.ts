// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/eslint'],
    devtools: { enabled: true },
    compatibilityDate: '2024-04-03',
    eslint: {
        config: {
            stylistic: {
                indent: 4,
                semi: true,
                quotes: 'single',
                blockSpacing: true,
                arrowParens: true,
                jsx: true,
                braceStyle: '1tbs',
            },
        },
    },
});
