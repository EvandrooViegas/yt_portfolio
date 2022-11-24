module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
      },
      fontSize: {
        '10xl': ['200px'],
        '15xl': ['14rem']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}