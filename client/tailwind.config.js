/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}",
        './public/index.html',
        './src/index.css',
    ],
    theme: {
        colors: {
            'spotify-green': '#1DB954',
            'spotify-black2': '#212121',
            'spotify-black': '#121212',
            'spotify-gray': '#535353',
            'spotify-light-gray': '#b3b3b3',
            'spotify-white': '#ffffff',
            'spotify-light-white': '#f5f5f5',
            'spotify-red': '#ff0000',

        },
        extend: {},
    },
    plugins: [],
}