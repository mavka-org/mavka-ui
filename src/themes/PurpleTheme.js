const allPalette = {
  /*
    All across-theme colors (don't use unless absolutely certain)
  */
  green: '#34C759',
  greenLight: '#F2FFF5',
  red: '#FB5255',
  redLight: '#FFE9E9',
  blue: '#007AFF',
  blueLight: '#EDF6FF',
  yellow: '#FFCC00',
  yellowLight: '#FFFCF1',
  purple: '#5856D6',
  purpleLight: '#EAEAFF',
  grey: 'rgba(31, 31, 31, 0.54)',
  greyLight: 'rgba(31, 31, 31, 0.38)',
  black: 'rgba(31, 31, 31, 1)', // #1F1F1F
  white: '#FFFFFF',
}

const theme = {
  themeName: 'Purple Theme',
  palette: {
    /*
      Functional colors
    */
    primary: { 
      main: allPalette.black,  
      contrastText: allPalette.white,
    },
    secondary: { 
      main: allPalette.purple,  
      contrastText: allPalette.white,
    },
    success: { 
      main: allPalette.green, 
      contrastText: allPalette.white,
    },
    successLight: { 
      main: allPalette.greenLight, 
      contrastText: allPalette.black,
    },
    error: { 
      main: allPalette.red,  
      contrastText: allPalette.white
    },
    errorLight: { 
      main: allPalette.redLight,  
      contrastText: allPalette.black
    },
    warning: { 
      main: allPalette.yellow, 
      contrastText: allPalette.white,
    },
    info: { 
      main: allPalette.yellowLight, 
      contrastText: allPalette.black,
    },
    
    text: { 
      primary: allPalette.black,
      secondary: allPalette.grey,
      disabled: allPalette.greyLight,
      hint: allPalette.greyLight
    },
    background: { 
      main: allPalette.purpleLight,
      contrastText: allPalette.black,
    },
    surface: { 
      main: allPalette.white, 
      contrastText: allPalette.black 
    },

    alternative: {
      green: allPalette.green,
      greenLight: allPalette.greenLight,
      red: allPalette.red,
      redLight: allPalette.redLight,
      blue: allPalette.blue,
      blueLight: allPalette.blueLight,
      yellow: allPalette.yellow,
      yellowLight: allPalette.yellowLight,
      purple: allPalette.purple,
      purpleLight: allPalette.purpleLight,
      grey: allPalette.grey,
      greyLight: allPalette.greyLight,
    }
  },
}

export default theme
