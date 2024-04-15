import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
const APP_BAR_WIDTH = '244px'
const SUGGEST_BAR_WIDTH = '350px'
const FEED_CONTENT_WIDTH = `calc(100vw - ${APP_BAR_WIDTH} - ${SUGGEST_BAR_WIDTH})`


// Create a theme instance.
const theme = extendTheme({
  instagram: {
    appBarWidth: APP_BAR_WIDTH,
    feedContentWidth: FEED_CONTENT_WIDTH,
    suggestBarWidth: SUGGEST_BAR_WIDTH
  },
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  }
  // MuiSvgIcon: {
  //   styleOverrides: {
  //     root: {
  //       color: '#000'
  //     }
  //   }
  // }
})

export default theme