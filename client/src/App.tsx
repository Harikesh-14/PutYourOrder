import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './pages/Home'
import AdminRegister from './pages/AdminRegister'

function App() {
  return (
    <>
      <Routes>
        <Route path='/admin/register' element={<AdminRegister />} />
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
