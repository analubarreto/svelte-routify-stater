const production = !process.env.ROLLUP_WATCH;

module.exports = {
  theme: {
    colors: {
      lightBrown: '#DEC9BC',
      green: '#589431',
      red: '#ED7459',
      darkGray: '#404040',
      lightPink: '#FFFEE5',
      wihte: '#FFFFFF'
    },
    fontFamily: {
      // font-body
      body: ['Source Sans Pro'],
      // font-title
      title: ['Montserrat']
    }
  },
  extend: {
    borderRadius: {
      'sm': '0.313rem',
      'md': '0.625rem'
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
};