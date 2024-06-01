import { Link } from "react-router-dom"
import { BsCurrencyRupee, BsHouseFill } from "react-icons/bs"
import { SiManageiq } from "react-icons/si"
import { BiLogOut, BiUserPlus } from "react-icons/bi"

function Sidebar() {
  return (
    <section
      className="w-[20rem] h-screen fixed top-0 left-0 flex flex-col justify-between px-7 py-10 bg-gray-800 text-white shadow-lg transition duration-300 ease-in-out z-50 overflow-y-auto overflow-x-hidden scrollbar-hide"
    >
      <div>
        <img
          src="../../PutYourOrder.png"
          alt="Logo"
          className="w-60 mx-auto rounded-full"
        />
      </div>

      <div className="text-center">
        <h1 className="text-xl font-semibold">Admin</h1>
        <p className="text-gray-400">Harikesh Ranjan</p>
      </div>

      <nav className="flex flex-col justify-center">
        <ul
          className="space-y-6"
        >
          <li
            className="flex items-center gap-2 py-2 px-4 rounded-md text-white text-lg border hover:bg-blue-500 hover:border-blue-500 transition duration-300 ease-in-out active:bg-blue-700 active:shadow-none cursor-pointer"
          >
            <BsHouseFill className="inline-block" size={20} />
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li
            className="flex items-center gap-2 py-2 px-4 rounded-md text-white text-lg border hover:border-blue-500 hover:bg-blue-500 transition duration-300 ease-in-out active:bg-blue-700 active:shadow-none cursor-pointer"
          >
            <SiManageiq className="inline-block" size={20} />
            <Link to={"#"}>Manager Vendors</Link>
          </li>
          <li
            className="flex items-center gap-2 py-2 px-4 rounded-md text-white text-lg border hover:border-blue-500 hover:bg-blue-500 transition duration-300 ease-in-out active:bg-blue-700 active:shadow-none cursor-pointer"
          >
            <BiUserPlus className="inline-block" size={20} />
            <Link to={"#"}>Add Vendor</Link>
          </li>
          <li
            className="flex items-center gap-2 py-2 px-4 rounded-md text-white text-lg border hover:border-blue-500 hover:bg-blue-500 transition duration-300 ease-in-out active:bg-blue-700 active:shadow-none cursor-pointer"
          >
            <BsCurrencyRupee className="inline-block" size={20} />
            <Link to={"#"}>Total sales</Link>
          </li>
        </ul>
      </nav>

      <nav>
        <ul
          className="space-y-1 text-center"
        >
          <li
            className="font-light text-sm text-gray-400 hover:text-white transition duration-300 ease-in-out cursor-pointer active:text-white active:shadow-none"
          >
            <Link to={"#"}>Terms and Services</Link>
          </li>
          <li
            className="font-light text-sm text-gray-400 hover:text-white transition duration-300 ease-in-out cursor-pointer active:text-white active:shadow-none"
          >
            <Link to={"#"}>Privacy Policy</Link>
          </li>
        </ul>
      </nav>

      <div className="text-center" >
        <Link
          to={"#"}
          className="inline-flex items-center gap-2 py-2 px-4 rounded-md shadow-md text-white text-lg bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out active:bg-red-700 active:shadow-none cursor-pointer"
        >
          Logout
          <BiLogOut className="inline-block rotate-180" size={20} />
        </Link>
      </div>
    </section>
  )
}

export default Sidebar