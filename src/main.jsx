import CssBaseline from '@mui/material/CssBaseline'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from './theme.js'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RecoilRoot } from 'recoil'
import { ConfirmProvider } from 'material-ui-confirm'
import { AuthContextProvider } from '~/context/AuthContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CssVarsProvider theme={theme}>
      <ConfirmProvider>
        <CssBaseline/>
        <RecoilRoot>
          <SocketContextProvider>
            <App/>
          </SocketContextProvider>
        </RecoilRoot>
        <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar={false}newestOnTop={false}closeOnClick rtl={false} pauseOnFocusLoss={false} draggablepauseOnHover theme="colored" transition={Bounce} />
      </ConfirmProvider>
    </CssVarsProvider>
  </BrowserRouter>
)
