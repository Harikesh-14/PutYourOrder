import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
// import Home from './pages/Home'
import AdminRegister from './pages/AdminRegister'
import AdminLogin from './pages/AdminLogin'
import VendorLogin from './pages/VendorLogin'

function App() {
  return (
    <>
      <Routes>
        <Route path='/admin/register' element={<AdminRegister />} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/' element={<Layout />} >
          <Route index element={<VendorLogin />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
