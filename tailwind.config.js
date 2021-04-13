module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          orange: 'hsl(31, 77%, 52%)',
          cyan: 'hsl(184, 100%, 22%)',
          darkCyan: 'hsl(179, 100%, 13%)',
        },
        neutral: {
          white: 'hsla(0, 0%, 100%, 0.75)',
          lightGray: 'hsl(0, 0%, 95%)',
        },
      },
      fontFamily: {
        body: ['"Big Shoulders Display"'],
        heading: ['"Lexend Deca"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
