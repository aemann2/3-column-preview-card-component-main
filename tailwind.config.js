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
      gridTemplateColumns: {
        mobile: 'repeat(1, minmax(300px, 500px))',
        main: 'repeat(3, minmax(0, 400px))',
      },
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
    extend: {
      borderWidth: ['hover'],
    },
  },
  plugins: [],
};
