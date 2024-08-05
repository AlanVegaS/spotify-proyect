/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-black': '#000000',
                'deep-gray': '#121212',
                'text-gray': '#727272',
                'base-green': '#1ed760',
                'text-green': '#169c46',
                'invalid': '#e91429',
            },
            borderRadius: {
                'base-field': '9999px',
                'lg': '8px',
                'sm': '4px'

            }, height: {
                '128': '32rem',
            }, width: {
                '128': '32rem',
            }, gap: {
                'sm': '0.5rem',
            },
            padding: {
                'sm': '0.5rem',
            }
        },
    },
    plugins: [],
}