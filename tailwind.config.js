const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["src/**/*.{svelte,html}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                gray: colors.trueGray,
            },
            minWidth: t => t("spacing"),
            fontFamily: {
                DSEG7: "DSEG7Classic-Regular",
            },
            spacing: {
                cw: "1ch",
            },
        },
    },
    variants: {
        extend: {
            height: ["hover"],
        },
    },
    plugins: [],
};
