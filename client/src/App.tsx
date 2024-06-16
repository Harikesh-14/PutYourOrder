import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import AdminRegister from './pages/AdminRegister'
import AdminLogin from './pages/AdminLogin'
import VendorLogin from './pages/VendorLogin'
import AdminDashboard from './container/AdminDashboard'
import AdminLayout from './AdminLayout'
import AdminManageVendors from './container/AdminManageVendors'
import AdminAddVendor from './container/AdminAddVendor'
import AdminAddProduct from './container/AdminAddProduct'
import TermsAndConds from './container/TermsAndConds'
import PrivacyPolicy from './container/PrivacyPolicy'
import VendorHomePage from './container/VendorHomePage'
import AdminManageProducts from './container/AdminManageProducts'

function App() {
  return (
    <>
      <Routes>
        <Route path='/admin' element={<AdminLayout />} >
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='manage-vendors' element={<AdminManageVendors />} />
          <Route path='add-vendor' element={<AdminAddVendor />} />
          <Route path='add-product' element={<AdminAddProduct />} />
          <Route path='manage-products' element={<AdminManageProducts />} />
          <Route path='terms-and-conditions' element={<TermsAndConds />} />
          <Route path='privacy-policies' element={<PrivacyPolicy />} />
        </Route>
        <Route path='/admin/register' element={<AdminRegister />} />
        <Route path='/admin/login' element={<AdminLogin />} />

        <Route path='/login' element={<VendorLogin />} />
        <Route path='/' element={<Layout />} >
          <Route index element={<VendorHomePage />} />
          <Route path='terms-and-conditions' element={<TermsAndConds />} />
          <Route path='privacy-policies' element={<PrivacyPolicy />} />
        </Route>

        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
