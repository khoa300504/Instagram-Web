import { experimental_extendTheme as extendTheme} from '@mui/material/styles'
// const APP_BAR_WIDTH = '244px'
// const SUGGEST_BAR_WIDTH = '350px'
// const FEED_CONTENT_WIDTH = `calc(100vw - ${APP_BAR_WIDTH} - ${SUGGEST_BAR_WIDTH})`


const theme = extendTheme({
  colorSchemes: {
    light: {
    },
    dark: {
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar' : {
            height: '8px',
            width: '0.4em'
          },
          '*::-webkit-scrollbar-track': {
            background: 'transparent'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            background: '#95a5a6'
          }
        }
      }
    }
  }
  // ...other properties
})

export default theme