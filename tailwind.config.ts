import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                // mobile: '375px',
                // tablet: '616px',
                // desktop: '1440px',
                mobile: '0px',
                tablet: '616px',
                desktop: '1440px',
            },
            maxWidth: {
                mobile: '375px',
                tablet: '616px',
                desktop: '736px',
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'recipe-stone-100': 'hsl(30, 54%, 90%)',
                'recipe-stone-150': 'hsl(30, 18%, 87%)',
                'recipe-stone-600': 'hsl(30, 10%, 34%)',
                'recipe-stone-900': 'hsl(24, 5%, 18%)',
                'recipe-brown': 'hsl(14, 45%, 36%)',
                'recipe-rose-800': 'hsl(332, 51%, 32%)',
                'recipe-rose': 'hsl(330, 100%, 98%)',
            },
            backgroundColor: {
                'recipe-stone-100': 'hsl(30, 54%, 90%)',
                'recipe-stone-150': 'hsl(30, 18%, 87%)',
                'recipe-stone-600': 'hsl(30, 10%, 34%)',
                'recipe-stone-900': 'hsl(24, 5%, 18%)',
                'recipe-brown': 'hsl(14, 45%, 36%)',
                'recipe-rose-800': 'hsl(332, 51%, 32%)',
                'recipe-rose': 'hsl(330, 100%, 98%)',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
                youngSerif: ['YoungSerif', 'serif'],
            },
            borderRadius: {
                'recipe-desktop': '1.5rem',
                'recipe-tablet': '1.25rem',
                'recipe-mobile': '1rem',
            },
        },
    },
    plugins: [],
} satisfies Config;
