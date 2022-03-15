import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { createTheme } from '@mui/material/styles';

const ThemeApp = createTheme({
  palette: {
    primary: {
      main: "#2D58A5"
    },
    secondary: {
      main: "#FFC115"
    },
    error: {
      main: "#23395B"
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeApp}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
