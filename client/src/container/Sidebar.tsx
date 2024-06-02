import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHouseFill, BsCurrencyRupee } from 'react-icons/bs';
import { SiManageiq } from 'react-icons/si';
import { BiUserPlus, BiLogOut } from 'react-icons/bi';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 z-50 w-[27rem] md:w-[20rem] h-full py-5 px-5 bg-gray-800 text-white flex flex-col justify-between transition-transform duration-300 ease-in-out transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
      >
        <div className="relative flex justify-end p-4 md:hidden">
          <div
            className="flex flex-col justify-center gap-1 cursor-pointer p-2 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-gray-700 active:bg-gray-600 active:shadow-none"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <span className="w-10 h-2 bg-white rounded-full"></span>
            <span className="w-7 h-2 bg-white rounded-full"></span>
            <span className="w-4 h-2 bg-white rounded-full"></span>
          </div>
        </div>

        <div>
          <img
            src="../../PutYourOrder.png"
            alt="Logo"
            className="w-40 mx-auto rounded-full"
          />
        </div>

        <div className="text-center mt-4">
          <h1 className="text-xl font-semibold">Admin</h1>
          <p className="text-gray-400">Harikesh Ranjan</p>
          <p className="text-gray-400 text-sm">@{`ndklcvnn3kl4nkl23nj`}</p>
        </div>

        <nav className="flex flex-col mt-6">
          <ul className="space-y-4">
            <li className="flex items-center gap-2 py-2 px-4 rounded-md text-white text-lg border hover:bg-blue-500 hover:border-blue-500 transition duration-300 ease-in-out active:bg-blue-700 active:shadow-none cursor-pointer">
              <BsHouseFill className="inline-block" size={20} />
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li className="flex items-center gap-2 py-2 px-4 rounded-md text-white text-lg border hover:bg-blue-500 hover:border-blue-500 transition duration-300 ease-in-out active:bg-blue-700 active:shadow-none cursor-pointer">
              <SiManageiq className="inline-block" size={20} />
              <Link to="/admin/manage-vendors">Manage Vendors</Link>
            </li>
            <li className="flex items-center gap-2 py-2 px-4 rounded-md text-white text-lg border hover:bg-blue-500 hover:border-blue-500 transition duration-300 ease-in-out active:bg-blue-700 active:shadow-none cursor-pointer">
              <BiUserPlus className="inline-block" size={20} />
              <Link to={"/admin/add-vendor"}>Add Vendor</Link>
            </li>
            <li className="flex items-center gap-2 py-2 px-4 rounded-md text-white text-lg border hover:bg-blue-500 hover:border-blue-500 transition duration-300 ease-in-out active:bg-blue-700 active:shadow-none cursor-pointer">
              <BsCurrencyRupee className="inline-block" size={20} />
              <Link to="#">Total Sales</Link>
            </li>
          </ul>
        </nav>

        <nav className="mt-6">
          <ul className="space-y-1 text-center">
            <li className="font-light text-sm text-gray-400 hover:text-white transition duration-300 ease-in-out cursor-pointer active:text-white active:shadow-none">
              <Link to="#">Terms and Services</Link>
            </li>
            <li className="font-light text-sm text-gray-400 hover:text-white transition duration-300 ease-in-out cursor-pointer active:text-white active:shadow-none">
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </nav>

        <div className="text-center mt-6 mb-4">
          <Link
            to="#"
            className="inline-flex items-center gap-2 py-2 px-4 rounded-md shadow-md text-white text-lg bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out active:bg-red-700 active:shadow-none cursor-pointer"
          >
            Logout
            <BiLogOut className="inline-block rotate-180" size={20} />
          </Link>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 z-40 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${showSidebar ? 'opacity-50' : 'opacity-0 pointer-events-none'
          } md:hidden`}
        onClick={() => setShowSidebar(false)}
      ></div>

      <div
        className='relative w-full md:hidden'
      >
        <div
          className="absolute top-5 right-5 flex flex-col justify-center gap-1 cursor-pointer p-2 rounded-md bg-white transition duration-300 ease-in-out"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <span className="w-10 h-2 rounded-full bg-gray-600"></span>
          <span className="w-7 h-2 rounded-full bg-gray-600"></span>
          <span className="w-4 h-2 rounded-full bg-gray-600"></span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;