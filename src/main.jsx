import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from './theme.js'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}></ThemeProvider>
      <CssBaseline/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
