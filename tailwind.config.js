module.exports = {
  theme: {
    extend: {
      'height': {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  variants: {
    height: ['responsive', 'hover', 'focus', 'group-hover'],
    zIndex: ['responsive', 'hover', 'focus'],
    shadow: ['responsive', 'hover', 'focus'],
    padding: ['responsive', 'hover', 'group-hover'],
    display: ['responsive', 'hover', 'group-hover'],
    inset: ['hover', 'group-hover'],
  },
  plugins: [],
}
