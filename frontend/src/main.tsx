import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Auth0ProviderWithNavigat from './auth/Auth0ProviderWithNavigat'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithNavigat>
        <AppRoutes />
      </Auth0ProviderWithNavigat>
    </Router>
  </React.StrictMode>,
)
