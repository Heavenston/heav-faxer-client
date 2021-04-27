const colors = require("tailwindcss/colors");

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
                DSEG14: "DSEG14Classic-Regular",
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
