import React, { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

function AdminAddVendor() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    password: "",
  })

  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('http://localhost:3000/admin/checkAdminLoginAuth', {
          method: 'GET',
          credentials: 'include',
        })

        const data = await response.json()

        if (!data.authenticated) {
          setRedirect(true)
        }
      } catch (error) {
        console.error(error)
      }
    }

    checkAuthStatus()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const addVendor = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:3000/admin/add-vendor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      })

      if (!response.ok) {
        const errorData = await response.json()

        if (errorData.message === "Vendor already exists") {
          alert("Vendor already exists")
        } else {
          alert("Internal server error")
        }
      } else {
        alert("Vendor added successfully")
        setFormData({
          firstName: "",
          lastName: "",
          gender: "",
          email: "",
          phoneNumber: "",
          password: "",
        })
      }
    } catch (error) {
      console.error("Add vendor error:", error)
    }
  }

  if (redirect) {
    return <Navigate to="/admin/login" />
  }

  return (
    <div className="md:ml-[20rem] p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Add Vendor</h1>

      <form
        className="my-7 bg-white border-b border-gray-300"
        method="POST"
        onSubmit={addVendor}
      >
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg"
          >Vendor's first name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg"
          >Vendor's last name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg">Vendor's gender</label>
          <select
            className="w-full border border-gray-300 rounded p-2"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
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
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg"
          >Vendor's phone number</label>
          <input
            type="tel"
            className="w-full border border-gray-300 rounded p-2"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <label
            className="w-[74%] md:w-[25%] text-gray-800 font-semibold text-md md:text-lg"
          >Vendor's password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded p-2"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-3 md:p-5 md:px-10">
          <button
            className="w-36 bg-blue-500 text-white font-semibold text-center text-lg mt-6 md:mt-3 p-2 rounded mx-auto hover:bg-blue-600 transition duration-200 ease-in-out"
            type="submit"
          >
            Add Vendor
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdminAddVendor