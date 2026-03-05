/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, inviting, travel-inspired color scheme
        primary: '#1B4965',      // Deep ocean blue - trust, journey
        secondary: '#F0E6D3',    // Warm sand - Mediterranean warmth  
        accent: '#E07A5F',       // Sunset orange - warmth, CTA
        lightBg: '#FAFAF5',     // Off-white
        darkText: '#2D3436',     // Charcoal
        success: '#81B29A',      // Success green - nature, fresh start
      },
      fontFamily: {
        'serif': ['DM Serif Display', 'serif'],
        'sans': ['Source Sans 3', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out',
        'fade-in': 'fadeIn 1.2s ease-out',
        'slide-up': 'slideUp 1s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}