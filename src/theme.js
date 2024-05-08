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
    }
  }
  // ...other properties
})

export default theme