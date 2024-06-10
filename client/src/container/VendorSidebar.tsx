import { useContext, useEffect, useState } from "react"
import { BiLogOut } from "react-icons/bi"
import { BsHouseFill } from "react-icons/bs"
import { SiManageiq } from "react-icons/si"
import { Link, Navigate } from "react-router-dom"
import { VendorContext } from "../context/vendorContext"

function VendorSidebar() {
  const [showSidebar, setShowSidebar] = useState(false)
  const [redirect, setRedirect] = useState<boolean>(false)

  const { vendorLoggedIn, setVendorLoggedIn, isVendorLoggedIn, setIsVendorLoggedIn } = useContext(VendorContext)!

  useEffect(() => {
    try {
      fetch("http://localhost:3000/vendor/profile", {
        method: "GET",
        credentials: "include"
      }).then(response => {
        response.json().then(data => {
          setVendorLoggedIn(data)
          setIsVendorLoggedIn(true)
        })
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  const vendorDetails = {
    id: vendorLoggedIn.id,
    firstName: vendorLoggedIn.firstName,
    lastName: vendorLoggedIn.lastName,
    gender: vendorLoggedIn.gender,
    email: vendorLoggedIn.email,
    phoneNumber: vendorLoggedIn.phoneNumber,
  }

  const logoutUser = async () => {
    try {
      let response = await fetch("http://localhost:3000/vendor/logout", {
        method: "POST",
        credentials: "include"
      })

      if (response.ok) {
        setRedirect(true)
        setVendorLoggedIn({
          id: "",
          firstName: "",
          lastName: "",
          gender: "",
          email: "",
          phoneNumber: 0,
          message: ""
        })
        setIsVendorLoggedIn(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (redirect) {
    return <Navigate to="/login" />
  }

  return (
    <div>
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
            <h1 className="text-xl font-semibold">Vendor</h1>
            <p className="text-gray-400">{vendorDetails.firstName}</p>
            <p className="text-gray-400 text-sm">@{vendorDetails.id}</p>
          </div>

          <nav className="flex flex-col mt-6">
            <ul className="space-y-4">
              <li className="flex items-center gap-2 py-2 px-4 rounded-md text-white text-lg border hover:bg-blue-500 hover:border-blue-500 transition duration-300 ease-in-out active:bg-blue-700 active:shadow-none cursor-pointer">
                <BsHouseFill className="inline-block" size={20} />
                <Link to="/">Home</Link>
              </li>
              <li className="flex items-center gap-2 py-2 px-4 rounded-md text-white text-lg border hover:bg-blue-500 hover:border-blue-500 transition duration-300 ease-in-out active:bg-blue-700 active:shadow-none cursor-pointer">
                <SiManageiq className="inline-block" size={20} />
                <Link to={"#"}>Manage Cart</Link>
              </li>
            </ul>
          </nav>

          <nav className="mt-6">
            <ul className="space-y-1 text-center">
              <li className="font-light text-sm text-gray-400 hover:text-white transition duration-300 ease-in-out cursor-pointer active:text-white active:shadow-none">
                <Link to="/admin/terms-and-conditions">Terms and Services</Link>
              </li>
              <li className="font-light text-sm text-gray-400 hover:text-white transition duration-300 ease-in-out cursor-pointer active:text-white active:shadow-none">
                <Link to="/admin/privacy-policies">Privacy Policy</Link>
              </li>
            </ul>
          </nav>

          {isVendorLoggedIn && (
            <div className="text-center mt-6 mb-4">
              <Link
                to="#"
                className="inline-flex items-center gap-2 py-2 px-4 rounded-md shadow-md text-white text-lg bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out active:bg-red-700 active:shadow-none cursor-pointer"
                onClick={logoutUser}
              >
                Logout
                <BiLogOut className="inline-block rotate-180" size={20} />
              </Link>
            </div>
          )}

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
    </div>
  )
}

export default VendorSidebar