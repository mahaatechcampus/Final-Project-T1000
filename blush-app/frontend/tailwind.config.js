
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      sm: '576px',
      md:'768px',
      lg:'992px',
      xl:'1200px'
    },
    container: {
      center:true,
      padding: '1rem'
    },
    extend: {
      fontFamily:{
      poppins: "'poppins',sans-serif",
      roboto: "'Roboto', sans-serif"
      } 
    },
    colors: {
      transparent: 'transparent',
      "color1": "#D19F9E",
      "color2": "#C7A9A8",
      "color3": "#574141",
      "color4": "#B0B29A",
      "color5": "#7B7D67",
      "color6": "#2F2C23",
      "color7": "#FEEBD6",
      "color8": "#FFF6F6",
      "color9": "#8F003E",
      "color10": "#EF626A",
      "color11":"#FFFFFF",
      "color12":"#C6C6C6",
      "color13":"#E6D91E",
      "color14":"#888888"
  },
  variants: {
    extend: {}
    },
  },
  plugins: [],
};
