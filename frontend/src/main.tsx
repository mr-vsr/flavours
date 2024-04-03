import React from 'react';
import ReactDOM from 'react-dom/client'
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Auth0ProviderWithNavigat from './auth/Auth0ProviderWithNavigat';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigat>
          <AppRoutes />
        </Auth0ProviderWithNavigat>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
)
