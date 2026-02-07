/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector', // Force manual toggling via class
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
