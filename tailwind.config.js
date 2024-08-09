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
                'text-gray': '#b3b3b3',
                'base-green': '#1ed760',
                'text-green': '#169c46',
                'invalid': '#e91429',
                'text-white': '#fff',
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
                'lg': '1.25rem'
            },
            padding: {
                'sm': '0.5rem',
                'lg': '1.3rem'
            },
            screens: {/* Sizes also in 'tailwind.config.js' */
                'sm': { 'min': '10px', 'max': '767px' },
                'md': { 'min': '768px', 'max': '1279px' },
                'lg': { 'min': '1280px', 'max': '5768px' }
            },
            transitionDuration: {
                'text': '300ms',
            }
        },
    },
    plugins: [],
}