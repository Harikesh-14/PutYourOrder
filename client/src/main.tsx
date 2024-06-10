import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/adminContext.tsx'
import VendorContextProvider from './context/vendorContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminContextProvider>
        <VendorContextProvider>
          <App />
        </VendorContextProvider>
      </AdminContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
