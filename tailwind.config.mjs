
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                'fade-up-slow': {
                    '0%': { opacity: '0', transform: 'translateY(1.5rem)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-up-slow': 'fade-up-slow 1.5s ease-out forwards',
            },
        },
    },
    plugins: [],
};
