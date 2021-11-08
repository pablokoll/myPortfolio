
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                myBackground: '#F9F9F9',
                myWhite: '#F5F5F6',
                myGray: '#D8D4DC',
                myNightBlue: '#12296B',
                myDarkGray: '#333333',
                myYellow: '#F6CE04',
                myYellowLow: '#F7F1DF',
                myYellowDark: '#e8c307',
                myDarkGrayLow: '#535369',
                myTextBlue: '#4563DE',
                myButtonBlueT: '#425FDB',
                myButtonFill: '#E8EBF6',
                mySubTitle2: '#3F5FD9',
                myTextPresent: '#4D4D4D',
                mySkillBlue: '#DBEBED',
                mySkillEduc: '#286C92',
                mySkillLila: '#DEDBED',
                mySkillExp: '#7448AE',
                mySkillOrange: '#EDE4DB',
                mySkillSkill: '#A94530',
                mySkillSubSkill: '#B95520',
                mySkillTools: '#544F76',
                myContactTitles: '#373737',
                myContactText: '#5F5F5F',
                myContactPlace: '#737373',
                myContactBorderInput: '#B3B3B3',
                myBlue: '#223FBB',
                myGray2: '#6E6F74'
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
            textDecoration: ['focus-visible'],
            visibility: ['hover', 'focus'],
        },
    },
    plugins: [require('@tailwindcss/forms'), require('tailwindcss-textshadow')],
};
