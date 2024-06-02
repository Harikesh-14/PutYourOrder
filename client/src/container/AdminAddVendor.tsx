import { Link } from "react-router-dom"

function AdminAddVendor() {
  return (
    <div className="md:ml-[20rem] p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Add Vendor</h1>

      <div className="my-7 bg-white border-b border-gray-300">
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg"
          >Vendor's first name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg"
          >Vendor's last name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg">Vendor's gender</label>
          <select className="w-full border border-gray-300 rounded p-2">
            <option value={"gender"}>Gender</option>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
            <option value={"others"}>Others</option>
          </select>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg"
          >Vendor's email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg"
          >Vendor's phone number</label>
          <input
            type="tel"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg"
          >Vendor's password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <Link
            to={"#"}
            className="w-40 bg-blue-500 text-white font-semibold text-center text-lg mt-6 md:mt-3 p-3 rounded mx-auto hover:bg-blue-600 transition duration-200 ease-in-out"
          >
            Add Vendor
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminAddVendor