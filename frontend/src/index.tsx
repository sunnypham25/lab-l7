import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// NEW: Import MUI ThemeProvider and your custom theme
import { ThemeProvider, CssBaseline } from '@mui/material'
import web3Theme from './Util/theme'

const rootElement = document.getElementById('root')
if (!rootElement) {
  // TODO: Add a development safeguard if the root element is missing:
  const fallbackDiv = document.createElement('div')
  fallbackDiv.style.padding = '2rem'
  fallbackDiv.style.backgroundColor = '#fee'
  fallbackDiv.style.color = '#a00'
  fallbackDiv.style.fontFamily = 'system-ui, sans-serif'
  fallbackDiv.innerHTML = `
    <h1 style="margin: 0 0 1rem 0; font-size: 1.5rem;">Missing Root Element</h1>
    <p style="margin: 0; font-size: 1rem;">The root element was not found. Please check your index.html.</p>
  `
  document.body.appendChild(fallbackDiv)

  throw new Error('Root element not found')
}

const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={web3Theme}>
      <CssBaseline /> {/* Ensures consistent baseline styles for dark mode */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
)