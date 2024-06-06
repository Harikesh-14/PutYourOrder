import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
// import Home from './pages/Home'
import AdminRegister from './pages/AdminRegister'
import AdminLogin from './pages/AdminLogin'
import VendorLogin from './pages/VendorLogin'
import AdminDashboard from './container/AdminDashboard'
import AdminLayout from './AdminLayout'
import AdminManageVendors from './container/AdminManageVendors'
import AdminAddVendor from './container/AdminAddVendor'
import TermsAndConds from './container/TermsAndConds'
import PrivacyPolicy from './container/PrivacyPolicy'
import VendorHomePage from './pages/VendorHomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/admin' element={<AdminLayout />} >
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='manage-vendors' element={<AdminManageVendors />} />
          <Route path='add-vendor' element={<AdminAddVendor />} />
          <Route path='terms-and-conditions' element={<TermsAndConds />} />
          <Route path='privacy-policies' element={<PrivacyPolicy />} />
        </Route>
        <Route path='/admin/register' element={<AdminRegister />} />
        <Route path='/admin/login' element={<AdminLogin />} />

        <Route path='/vendor/login' element={<VendorLogin />} />
        <Route path='/' element={<Layout />} >
          <Route index element={<VendorHomePage />} />
        </Route>

        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
