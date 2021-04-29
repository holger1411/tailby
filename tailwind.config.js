module.exports = {
    purge: {
        preserveHtmlElements: false,
        content: [
            './site/templates/*.php',
            './site/snippets/*.php',
            './site/tailwind/*.css',
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {}
        },
    variants: {
        extend: {},
    },
    plugins: [
    ],
}
