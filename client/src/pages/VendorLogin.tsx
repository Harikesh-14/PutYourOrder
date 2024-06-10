import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

function VendorLogin() {
  const [ formData, setFormData ] = useState({
    email: "",
    password: ""
  })
  const [ redirect, setRedirect ] = useState<boolean>(false)
  const [isLogin, setIsLogin] = useState<boolean>(false)

  useEffect(() =>{
    const checkVendorLoginAuth = async () => {
      try {
        let response = await fetch("http://localhost:3000/vendor/checkVendorLoginAuth", {
          method: "GET",
          credentials: "include"
        })

        if(response.ok){
          let data = await response.json()
          if(data.authenticated){
            setIsLogin(true)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }

    checkVendorLoginAuth()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      let response = await fetch("http://localhost:3000/vendor/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
        credentials: "include"
      })

      if(!response.ok){
        let errorData = await response.json()

        if(errorData.message === "Vendor does not exist"){
          alert("Vendor does not exist")
        } else if (errorData.message === "Please enter all fields") {
          alert("Please enter all fields")
        } else if (errorData.message === "Invalid credentials") {
          alert("Invalid credentials")
        } else {
          alert("Internal server error")
        }
      } else {
        setRedirect(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  if(redirect){
    return <Navigate to="/" />
  }

  if(isLogin){
    return <Navigate to="/" />
  }

  return (
    <main className="h-screen w-full pt-20 md:py-5 bg-gray-100">
      <form
        className="w-[22rem] mx-auto p-4 bg-white rounded-md shadow flex flex-col justify-center"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col-reverse gap-3 justify-center items-center mt-6">
          <h1 className="text-2xl font-semibold">Welcome!</h1>
          <img
            src="../../PutYourOrder.png"
            alt="The Logo"
            className="w-56"
          />
        </div>

        <div className="flex flex-col my-6 gap-3">
          <input
            type="email"
            placeholder="Email"
            className="border-b-2 border-gray-300 py-2 px-1 outline-none"
            name="email"
            value={formData.email}
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
            Login
          </button>
        </div>

        <div>
          <div
            className="flex gap-2 justify-center"
          >
            <p
              className="text-sm text-gray-600 font-light text-center"
            >
              Not a vendor?
            </p>
            <Link
              to={"/admin/login"}
              className="text-blue-500 text-sm font-light text-center hover:underline transition duration-300 ease-in-out"
            >
              Admin
            </Link>
          </div>
        </div>
      </form>
    </main>
  )
}

export default VendorLogin