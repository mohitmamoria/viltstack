import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';
const colors = require('tailwindcss/colors');
const theme = require('./theme');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                heading: ['Unbounded', ...defaultTheme.fontFamily.sans],
                sans: ['Pathway Extreme', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                gray: colors.zinc,
                ...theme.colors,
            },
        },
    },

    plugins: [forms],
};
