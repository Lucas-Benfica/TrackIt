import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResetStyle from './style/ResetStyle.js'
import GlobalStyle from './style/GlobalStyle.js'
import { TokenProvider } from './context/TokenContext.jsx'
import { PercentProvider } from './context/PercentContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ResetStyle />
    <GlobalStyle />
      <PercentProvider>
        <TokenProvider>
          <App />
        </TokenProvider>
      </PercentProvider>
       
  </React.StrictMode>,
)
