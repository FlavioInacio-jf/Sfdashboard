module.exports = {
  content: ['./src/**/*.{html, js, ts, vue}', './src/**/*'],
  theme: {
    screens: {
      xs: { max: '500px' },
      sm: { max: '640px' },
      md: { max: '768px' },
      lg: { max: '1024px' },
      xl: { max: '1280px' },
      '2xl': { max: '1536px' }
    },
    colors: {
      primary: '#222831',
      secondary: '#393E46',
      tertiary: '#00ADB5',
      quartenary: '#EEEEEE',
      neutrals: {
        O00: '#FFFFFF',
        O25: '#F5F5F5',
        O50: '#F5F7FA',
        100: '#E4E7EB',
        200: '#CBD2D9',
        300: '#9AA5B1',
        400: '#52667A',
        500: '#313D49',
        600: '#29333D',
        700: '#212931',
        800: '#181F25',
        900: '#101418',
        999: '#080A0C'
      }
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        inter: ['Inter']
      }
    }
  }
};
