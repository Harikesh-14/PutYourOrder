import { Outlet } from "react-router-dom"
import VendorSidebar from "./container/VendorSidebar"

function Layout() {
  return (
    <div>
      <VendorSidebar />
      <Outlet />
    </div>
  )
}

export default Layout