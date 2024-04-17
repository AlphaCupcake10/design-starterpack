import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import LenisWrapper from './context/LenisWrapper.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LenisWrapper>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LenisWrapper>
    </BrowserRouter>
  </React.StrictMode>,
)
