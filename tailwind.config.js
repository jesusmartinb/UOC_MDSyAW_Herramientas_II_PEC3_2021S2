module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'movil': {'max': '376px'},
      'bigmovil': {'min': '576px'},
      'tablet': {'min': '672px'},
      'bigtablet': {'min': '768px'},
      'desktop': {'min': '992px'},
      'desktop-xl': {'min': '1200px'},
      'desktop-2xl': {'min': '1440px'},
    },
    fontFamily: {
      sans: [
        'Antonio',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['"New Tegomin"', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    colors: {
      'transparent': 'transparent',
      'main': '#ffff',
      'accent': '#fe320f',
      'text': '#282828',
      'black': '#000000',
    },
    extend: {
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
      maxWidth: {
        '400': '400px',
        '2.5xl': '45rem',
        '960': '960px',
        '8xl': '1496px',
      },
      height: {
        '854': '854px',
      },
      gridTemplateColumns: {
        'portadaCol': '2fr minmax(10em,max-content) minmax(14em,max-content) minmax(1em,1fr) fit-content(28em) calc(2em + .5vw)',
      },
      gridTemplateRows: {
        'portadaRow': '35vh 40vh 15vh 10vh',
      },
      gridRowEnd: {
        '-1': '-1',
      },
      zIndex: {
        '-1': '-1',
      },
      margin: {
        'initial': 'initial',
        'em': '.25em',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['focus'],
      fontWeight: ['hover'],
    },
  },
  plugins: [],
}
