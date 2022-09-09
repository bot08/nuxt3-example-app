const defaultTheme = require('tailwindcss/defaultTheme')

/**
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } 
**/

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans]
      },
      // spacing: {
      //   '18': '4.6rem'
      // },
      transitionDuration: { 
        DEFAULT: '175ms' 
      }
    }
  }
}
  