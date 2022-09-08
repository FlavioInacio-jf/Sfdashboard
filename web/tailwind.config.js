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
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        inter: ['Inter']
      }
    }
  }
};
