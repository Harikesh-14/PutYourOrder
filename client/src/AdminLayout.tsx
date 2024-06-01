import { Outlet } from "react-router-dom"
import Sidebar from "./container/Sidebar"

function AdminLayout() {
  return (
    <main className="relative bg-gray-100">
      <Sidebar />
      <Outlet />
    </main>
  )
}

export default AdminLayout