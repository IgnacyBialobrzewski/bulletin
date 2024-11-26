/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            'menu-image':  "url('menu.svg')"
        },
    },
    plugins: [],
}
