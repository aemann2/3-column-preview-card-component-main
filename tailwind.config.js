module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        luxury: "url('./images/icon-luxury.svg')",
        sedans: "url('./images/icon-sedans.svg')",
        suvs: "url('./images/icon-suvs.svg')",
      }),
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
        body: ['"Lexend Deca"'],
        heading: ['"Big Shoulders Display"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
