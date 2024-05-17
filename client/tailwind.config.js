/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            container: {
                containerMargin: '0.8rem',
            },
            border: {
                btBorderSize: '0.25rem',
                btBorderRadius: '1rem',
                btBorderMargin: '0.4rem',
            },
            font: {
                
                btActFontSize: '1.5rem',
                btInaFontSize: '1.25rem',
            },
            colors: {
                btBorderColor:'#006600',
                btTopColor:'#66ff66',
                btBotColor:'#00994c',
                contentContainerBgColor: '#abebc6',
            },
        },
    },
    plugins: [],
}

