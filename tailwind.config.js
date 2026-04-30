/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        sand: {
          50: '#FFFAF1',
          100: '#FFF1DC',
          200: '#FFE0B2',
        },
        coral: {
          400: '#FF8A65',
          500: '#FF6B4A',
          600: '#E54B2A',
        },
        ocean: {
          500: '#0EA5B7',
          600: '#067A8A',
          700: '#055866',
        },
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        shine: 'shine 3s linear infinite',
        slowSpin: 'slowSpin 30s linear infinite',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        suncart: {
          primary: '#FF6B4A',
          'primary-content': '#FFFFFF',
          secondary: '#0EA5B7',
          'secondary-content': '#FFFFFF',
          accent: '#FFB703',
          'accent-content': '#1A1A1A',
          neutral: '#1F2A37',
          'base-100': '#FFFAF1',
          'base-200': '#FFF1DC',
          'base-300': '#FFE0B2',
          'base-content': '#1F2A37',
          info: '#3ABFF8',
          success: '#22C55E',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
    ],
  },
}
