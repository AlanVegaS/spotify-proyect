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
                'hover-article': '#1f1f1f',
                'hover-shadow': 'rgba(0,0,0,.5)',
                'traslucid-1': 'hsla(0,0%,100%,.1)',
                'traslucid-2': 'hsla(0,0%,100%,.2)',
            },
            borderRadius: {
                'base-field': '9999px',
                'lg': '8px',
                'sm': '4px'

            }, height: {
                '128': '32rem',
                'figure': '48px',
                '75': '75%',
            }, width: {
                '128': '32rem',
                'figure': '48px',
            }, gap: {
                'sm': '0.5rem',
                'lg': '1.25rem'
            },
            padding: {
                'sm': '0.5rem',
                'md': '0.8rem',
                'lg': '1.3rem'
            },
            margin: {
                'sm': '0.5rem',
            },
            screens: {/* Sizes also in 'tailwind.config.js' */
                'sm': { 'min': '10px', 'max': '964px' },
                'md': { 'min': '965px', 'max': '1279px' },
                'lg': { 'min': '1280px', 'max': '1599px' },
                'xl': { 'min': '1600px', 'max': '5768px' },
            },
            transitionDuration: {
                'text': '300ms',
            },
            scale: {
                '102': '102%',
            }, boxShadow: {
                'play': '5px 5px 20px rgba(0, 0, 0, .8)',
                'cover': '0px 0 20px rgba(0, 0, 0, .4)',
            }, gridTemplateColumns: {
                'most-header-sm': 'repeat(2, minmax(188px, 1fr))',
                'most-header-lg': 'repeat(4, minmax(188px, 1fr))'
            }
        },
    },
    plugins: [],
}