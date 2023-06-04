import {  createMuiTheme, createTheme } from "@mui/material";
import { blue, green, grey, lightBlue } from "@mui/material/colors";

export const light = createTheme({
    palette: {
      primary: green,
      secondary: grey
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          size: "large",
          sx: {
            borderRadius: "10px"
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: "gray"
          }
        },
        defaultProps: {
          elevation: 20
        }
      }
    }
  });

export const dark= createTheme({
    palette: {
      primary: {
        main: '#023020'
      },
      secondary: grey,
      text: {
        main: '#fff'
      },
      background: {
        main: grey[900]
      }
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          size: "large",
          sx: {
            borderRadius: "10px"
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: grey[900]
          }
        },
        defaultProps: {
          elevation: 20
        }
      }
    }
  });

 export const mainTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#005CBD',
    },
    secondary: {
      main: '#565E71',
    },
    error: {
      main: '#BA1A1A',
    },
    neutral: {
      main: '#5E5E62',
    },
    text: {
      primary:'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        size: "large",
        sx: {
          borderRadius: "10px"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#fff"
        }
      },
      defaultProps: {
        elevation: 20
      }
    }
  }
 })

/*  import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#005CBD',
    },
    secondary: {
      main: '#565E71',
    },
    error: {
      main: '#BA1A1A',
    },
    neutral: {
      main: '#5E5E62',
    },
  },
}; */