import { useContext } from "react"
import { BiSolidPencil } from "react-icons/bi"
import { CgPassword } from "react-icons/cg"
import { CiUser } from "react-icons/ci"
import { Link } from "react-router-dom"
import { AdminContext } from "../context/adminContext"

function AdminDashboard() {
  const { adminLoggedIn } = useContext(AdminContext)!

  const userDetails = {
    firstName: adminLoggedIn.firstName,
    lastName: adminLoggedIn.lastName,
    gender: adminLoggedIn.gender,
    email: adminLoggedIn.email,
    phoneNumber: adminLoggedIn.phoneNumber,
  }

  return (
    <div className="md:ml-[20rem] p-10 bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Admin Dashboard</h1>
      <div className="my-7 bg-white border-b border-gray-300">
        <div className="py-4">
          <h2 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-gray-800 px-3">
            Profile
            <CiUser />
          </h2>
        </div>
        <div className="flex justify-between items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[15%] text-gray-800 font-semibold text-md md:text-lg"
          >First Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={userDetails.firstName}
            disabled
          />
          <Link
            to={'#'}
            className="bg-blue-500 text-white font-semibold text-sm md:text-lg ml-2 p-3 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
          >
            <BiSolidPencil />
          </Link>
        </div>

        <div className="flex justify-between items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[15%] text-gray-800 font-semibold text-md md:text-lg"
          >Last Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={userDetails.lastName}
            disabled
          />
          <Link
            to={'#'}
            className="bg-blue-500 text-white font-semibold text-sm md:text-lg ml-2 p-3 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
          >
            <BiSolidPencil />
          </Link>
        </div>

        <div className="flex justify-between items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[15%] text-gray-800 font-semibold text-md md:text-lg"
          >Gender</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={userDetails.gender}
            disabled
          />
          <Link
            to={'#'}
            className="bg-blue-500 text-white font-semibold text-sm md:text-lg ml-2 p-3 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
          >
            <BiSolidPencil />
          </Link>
        </div>

        <div className="flex justify-between items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[15%] text-gray-800 font-semibold text-md md:text-lg"
          >Email</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={userDetails.email}
            disabled
          />
          <Link
            to={'#'}
            className="bg-blue-500 text-white font-semibold text-sm md:text-lg ml-2 p-3 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
          >
            <BiSolidPencil />
          </Link>
        </div>

        <div className="flex justify-between items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[15%] text-gray-800 font-semibold text-md md:text-lg"
          >Phone Number</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            value={userDetails.phoneNumber}
            disabled
          />
          <Link
            to={'#'}
            className="bg-blue-500 text-white font-semibold text-sm md:text-lg ml-2 p-3 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
          >
            <BiSolidPencil />
          </Link>
        </div>
      </div>

      <div className="my-7 bg-white border-b border-gray-300">
        <div className="py-4">
          <h2 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-gray-800 px-3">
            Change Password
            <CgPassword />
          </h2>
        </div>
        <div className="flex justify-between items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[15%] text-gray-800 font-semibold text-md md:text-lg"
          >Old Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="flex justify-between items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[15%] text-gray-800 font-semibold text-md md:text-lg"
          >New Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="flex justify-between items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[15%] text-gray-800 font-semibold text-md md:text-lg"
          >Confirm Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="flex justify-center items-center p-3 md:p-5 md:px-10">
          <button
            className="bg-blue-500 text-white font-semibold text-md md:text-lg p-3 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
          >Change Password</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard