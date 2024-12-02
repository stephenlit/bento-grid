/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                purple100: 'hsl(254, 88%, 90%)',
                purple500: 'hsl(256, 67%, 59%)',
                yellow100: 'hsl(31, 66%, 93%)',
                yellow500: 'hsl(39, 100%, 71%)',
                white: 'hsl(0, 0%, 100%)',
                black: 'hsl(0, 0%, 7%)',
            },
        },
    },
    plugins: [],
};
