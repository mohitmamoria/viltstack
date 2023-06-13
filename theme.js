const colors = require('tailwindcss/colors');

module.exports = {
    colors: {
        cover: colors.black,

        'cover-link': {
            DEFAULT: colors.gray[200],
            hover: colors.white,
            focus: colors.white,
            active: colors.white,
        },

        primary: {
            lightest: colors.gray[400],
            lighter: colors.gray[500],
            DEFAULT: colors.gray[700],
            darker: colors.gray[800],
            darkest: colors.black,
        },

        button: {
            primary: {
                DEFAULT: colors.gray[900],
                hover: colors.black,
                focus: colors.gray[700],
            },
            secondary: {
                DEFAULT: colors.white,
                hover: colors.gray[50],
                focus: colors.gray[700],
            },
        },
    },
};
