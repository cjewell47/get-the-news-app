module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './components/**/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        
      },
      width: {
        mobile: 'calc(100% - 2.5rem)',
        'tablet-portrait': 'calc(100% - 2.875rem)',
        'tablet-landscape': '60rem', //960px
        'desktop-page': '74.375rem', //1190
      },
    },
    colors: {
      offWhite: '#fcf6b1',
      dark: '#2d1e2f',
      yellow: '#f7b32b',
      turquoise: '#a9e5bb',
      red: '#e3170a'
    },
    boxShadow: {
      md: '0 1px 1px hsl(0deg 0% 0% / 0.075),0 2px 2px hsl(0deg 0% 0% / 0.075),0 4px 4px hsl(0deg 0% 0% / 0.075),0 8px 8px hsl(0deg 0% 0% / 0.075),0 16px 16px hsl(0deg 0% 0% / 0.075)',
    },
    fontSize: {
      '12': '0.75rem', //12px
      '14': '0.875rem', //14px
      '16': '1rem', //16px
      '18': '1.125rem', //18px
      '20': '1.25rem', //20px
      '24': '1.5rem', //24px
    },
    screens: {
      sm: {max: '767px'},
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      'any-hover': {'raw': '(hover: hover)'},
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover', 'group-hover'],
    },
  },
  plugins: []
};
