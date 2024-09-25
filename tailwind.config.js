/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                'base-primary': '#000000',
                'l-base-primary': '#d7d7d7',
                'base-secondary': '#121212',
                'l-base-secondary': '#e7e7e7',
                'text-primary': '#ffffff',
                'l-text-primary': 'rgb(43, 43, 43)',
                'text-secondary': '#b3b3b3',
                'l-text-secondary': '#636363',
                'hover-card': 'rgba(255, 255, 255, 0.1)',
                'l-hover-card': 'rgba(0,0,0,.2)',
                'base-green': '#1ed760',
                'text-green': '#169c46',
                'invalid': '#e91429',
                'text-white': '#fff',
                'hover-article': '#1f1f1f',
                'hover-shadow': 'rgba(0,0,0,.5)',
                'traslucid-1': 'hsla(0,0%,100%,.1)',
                'traslucid-2': 'hsla(0,0%,100%,.2)',
                'traslucid-5': 'hsla(0,0%,0%,.5)',
                'l-traslucid-1': 'hsla(0,0%,50%,.1)',
                'l-traslucid-2': 'hsla(0,0%,50%,.2)',
                'l-traslucid-5': 'hsla(0,0%,50%,.5)',
                'traslucid-full': 'hsla(0,0%,100%,0)',
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
            screens: {/* Sizes also in src/styles */
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
                'most-header-sm': 'repeat(2, minmax(180px, 1fr))',
                'most-header-lg': 'repeat(4, minmax(190px, 1fr))',
                'catalog-content': 'repeat(auto-fill, minmax(165px, 1fr))',
                'table-content': '60px,1fr,80px',
            }, gridTemplateRows: {
                'catalog-content': '1fr',
            }, animation: {
                wiggle: 'wiggle 1s ease-in-out',
            }, keyframes: {
                wiggle: {
                    '0%': { transform: 'rotateY(0deg)' },
                    '100%': {
                        transform: 'rotateY(-180deg)'
                    }
                }
            }
        },
    },
    plugins: [],
}