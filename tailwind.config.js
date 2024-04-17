/** @type {import('tailwindcss').Config} */

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) , ${opacityValue})`
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'selector',
  theme: {
    extend: {
      // https://www.realtimecolors.com/?colors=eaf2f6-131525-2769d3-ffffff-35a4e3&fonts=Poppins-Poppins
      colors: {
        'text': withOpacityValue('--text'),
        'background': withOpacityValue('--background'),
        'background2': withOpacityValue('--background2'),
        'primary': withOpacityValue('--primary'),
        'secondary': withOpacityValue('--secondary'),
        'accent': withOpacityValue('--accent'),
      },
    },
  },
  plugins: [],
}
// 
