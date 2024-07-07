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
        amazon_blue: '#131921',
        amazon_light: '#232F3E',
        amazon_yellow: '#febd69',
        lightText: '#ccc',
      },
    },
  },
  plugins: [],
};
