
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                myBackground: '#F5F5F5',
                myWhite: '#F5F5F6',
                myGray: '#D8D4DC',
                myNightBlue: '#12296B',
                myDarkGray: '#333333',
                myYellow: '#F6CE04',
                myYellowLow: '#F7F1DF',
                myYellowDark: '#e8c307',
                myDarkGrayLow: '#535369'
            },
        },
        container: {
            center: true,
        },
        screens: {
            sm: '440px',
            md: '547px',
            lg: '768px',
            xl: '1024px',
            '2xl': '1280px',
        },
    },
    variants: {
        extend: {
            backgroundColor: ['checked', 'odd'],
            borderColor: ['checked'],
            overflow: ['hover'],
            textDecoration: ['focus-visible']
        },
    },
    plugins: [require('@tailwindcss/forms'), require('tailwindcss-textshadow')],
};
