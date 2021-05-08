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
  grey: '#828282',
  black: '#1F1F1F',
  white: '#FFFFFF',
}

const theme = {
  themeName: 'Purple Theme',
  palette: {
    /*
      Functional colors
    */
    primary: { 
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
    
    content: { 
      main: allPalette.black,
      contrastText: allPalette.white,
    },
    contentGrey: { 
      main: allPalette.grey,
      contrastText: allPalette.white,
    },
    background: { 
      main: allPalette.purpleLight,
      contrastText: allPalette.black,
    },
    surface: { 
      main: allPalette.white, 
      contrastText: allPalette.black 
    }
  },
}

export default theme
