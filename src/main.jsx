import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from './theme.js'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssVarsProvider theme={theme}>
        <CssBaseline/>
        <RecoilRoot>
          <App/>
        </RecoilRoot>
        <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar={false}newestOnTop={false}closeOnClick rtl={false} pauseOnFocusLoss={false} draggablepauseOnHover theme="colored" transition={Bounce} />
      </CssVarsProvider>
    </BrowserRouter>
  </React.StrictMode>
)
