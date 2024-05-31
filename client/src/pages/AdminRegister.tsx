import { useState } from "react"
import { Link } from "react-router-dom"

function AdminRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    password: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <main className="h-screen w-full pt-20 md:py-5 bg-gray-100">
      <form
        className="w-[22rem] mx-auto p-4 bg-white rounded-md shadow flex flex-col justify-center"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="flex flex-col-reverse gap-3 justify-center items-center mt-6">
          <h1 className="text-2xl font-semibold">Welcome</h1>
          <img
            src="../../PutYourOrder.png"
            alt="The Logo"
            className="w-56"
          />
        </div>

        <div className="flex flex-col my-6 gap-3">
          <input type="text"
            placeholder="First name"
            className="border-b-2 border-gray-300 py-2 px-1 outline-none"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Last name"
            className="border-b-2 border-gray-300 py-2 px-1 outline-none"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

          <select
            className="h-10 border-b-2 border-gray-300 outline-none"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="gender">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            type="email"
            placeholder="Email"
            className="border-b-2 border-gray-300 py-2 px-1 outline-none"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Phone number"
            className="border-b-2 border-gray-300 py-2 px-1 outline-none"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            className="border-b-2 border-gray-300 py-2 px-1 outline-none"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mt-5"
            type="submit"
          >
            Register
          </button>
        </div>

        <div>
          <div className="flex gap-2 justify-center">
            <p
              className="text-sm text-gray-600 font-light mt-2 text-center"
            >
              Already have an account?
            </p>

            <Link
              to={"/admin/login"}
              className="text-blue-500 text-sm font-light mt-2 text-center hover:underline transition duration-300 ease-in-out"
            >
              Login
            </Link>
          </div>

          <div
            className="flex gap-2 justify-center"
          >
            <p
              className="text-sm text-gray-600 font-light text-center"
            >
              Not an admin?
            </p>
            <Link
              to={"/register"}
              className="text-blue-500 text-sm font-light text-center hover:underline transition duration-300 ease-in-out"
            >
              Vendor
            </Link>
          </div>
        </div>
      </form>
    </main>
  )
}

export default AdminRegister